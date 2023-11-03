import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import type { MomokaTransaction, MomokaTransactionsQuery } from '@/generated';
import {
  LimitType,
  useMomokaSubmittersLazyQuery,
  useMomokaSummaryLazyQuery,
  useMomokaTransactionsQuery
} from '@/generated';
import { newTransactionQuery } from '@/graphql/NewTransactionSubscription';
import useSubmitterSpent from '@/hooks/useSubmitterSpent';
import { useAppPersistStore, useAppStore } from '@/store/app';
import getConfig from '@/utils/getConfig';

import EmptyState from '../shared/EmptyState';
import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import SingleTransaction from '../txns/SingleTransaction';
import Card from '../ui/Card';

const LATEST_TXNS_FETCH_COUNT = 25;

const LatestTransactions: FC = () => {
  const setLastFinalizedTransaction = useAppStore((state) => state.setLastFinalizedTransaction);
  const setAllTransactionsCount = useAppStore((state) => state.setAllTransactionsCount);
  const setTopSubmitter = useAppStore((state) => state.setTopSubmitter);

  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const [latestTransactions, setLatestTransactions] = useState<Array<MomokaTransaction>>();
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    getConfig(selectedEnvironment.id).apiEndpoint.replace('http', 'ws'),
    { protocols: ['graphql-ws'] }
  );

  const [fetchAllCount] = useMomokaSummaryLazyQuery({ fetchPolicy: 'no-cache' });
  const [fetchTopSubmitter] = useMomokaSubmittersLazyQuery({ fetchPolicy: 'no-cache' });

  const onCompleted = async (data: MomokaTransactionsQuery) => {
    const txns = data?.momokaTransactions.items;
    setLastFinalizedTransaction(txns[0] as MomokaTransaction);
    setLatestTransactions(txns as Array<MomokaTransaction>);
  };

  const { loading } = useMomokaTransactionsQuery({
    variables: { request: { limit: LimitType.TwentyFive } },
    onCompleted
  });

  const { fetchData: fetchSpentAmount } = useSubmitterSpent();

  const fetchCounts = async () => {
    const { data: countData } = await fetchAllCount();
    setAllTransactionsCount(countData?.momokaSummary.totalTransactions ?? 0);
    const { data: submittersData } = await fetchTopSubmitter();
    setAllTransactionsCount(countData?.momokaSummary.totalTransactions ?? 0);
    if (submittersData?.momokaSubmitters?.items[0]) {
      const submitters = submittersData?.momokaSubmitters.items.map((el) => el.address);
      fetchSpentAmount(submitters);
      setTopSubmitter(submittersData?.momokaSubmitters?.items[0]);
    }
  };

  useEffect(() => {
    sendJsonMessage({ type: 'connection_init' });
    if (readyState === 1) {
      sendJsonMessage({
        id: '1',
        type: 'start',
        payload: {
          variables: {},
          extensions: {},
          operationName: 'NewTransaction',
          query: newTransactionQuery
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyState]);

  useEffect(() => {
    const jsonData = JSON.parse(lastMessage?.data || '{}');
    const daData = jsonData?.payload?.data;

    if (daData) {
      const txn = daData?.newMomokaTransaction as MomokaTransaction;
      setLastFinalizedTransaction({ ...txn });
      let oldTxns = [...(latestTransactions as MomokaTransaction[])];
      oldTxns.unshift(txn);
      if (oldTxns.length > LATEST_TXNS_FETCH_COUNT) {
        oldTxns.pop();
      }
      setLatestTransactions(oldTxns);
      fetchCounts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

  return (
    <Card className="mt-10">
      <div className="left-0 right-0 flex items-center justify-between gap-y-3">
        <h1 className="font-medium md:text-[28px]">Latest transactions</h1>
        <Link
          href="/txns"
          className="text-[13px] font-medium uppercase leading-[15px] tracking-[-0.2px] text-[#565467] hover:opacity-70 dark:text-[#F5D4D2]"
        >
          <span>View all</span>
        </Link>
      </div>
      <div className="mt-3 overflow-x-auto">
        {latestTransactions?.length === 0 && !loading ? <EmptyState /> : null}
        {loading ? (
          <TransactionsShimmer />
        ) : latestTransactions?.length ? (
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
            <thead className="text-left">
              <tr className="font-gintoNord">
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Txn Id
                </th>
                <th className="w-20 px-4 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Action
                </th>
                <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Age
                </th>
                <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Client
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Sender
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Submitter
                </th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions?.map((txn) => {
                return <SingleTransaction key={txn?.transactionId} txn={txn} />;
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </Card>
  );
};

export default LatestTransactions;
