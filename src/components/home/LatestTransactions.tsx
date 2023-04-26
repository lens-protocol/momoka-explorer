import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import type { DataAvailabilityTransactionUnion, DaTransactionsQuery } from '@/generated';
import {
  useDaSummaryLazyQuery,
  useDataAvailabilitySubmittersLazyQuery,
  useDaTransactionsQuery
} from '@/generated';
import { newTransactionQuery } from '@/graphql/NewTransactionSubscription';
import { useAppPersistStore, useAppStore } from '@/store/app';
import getConfig from '@/utils/getConfig';

import EmptyState from '../shared/EmptyState';
import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import SingleTransaction from '../txns/SingleTransaction';
import Card from '../ui/Card';

const LATEST_TXNS_FETCH_COUNT = 20;

const LatestTransactions: FC = () => {
  const setLastFinalizedTransaction = useAppStore((state) => state.setLastFinalizedTransaction);
  const setAllTransactionsCount = useAppStore((state) => state.setAllTransactionsCount);
  const setTopSubmitter = useAppStore((state) => state.setTopSubmitter);

  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const [latestTransactions, setLatestTransactions] = useState<Array<DataAvailabilityTransactionUnion>>();
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    getConfig(selectedEnvironment.id).apiEndpoint.replace('http', 'ws'),
    { protocols: ['graphql-ws'] }
  );

  const [fetchAllCount] = useDaSummaryLazyQuery({ fetchPolicy: 'no-cache' });
  const [fetchTopSubmitter] = useDataAvailabilitySubmittersLazyQuery({ fetchPolicy: 'no-cache' });

  const onCompleted = async (data: DaTransactionsQuery) => {
    const txns = data?.dataAvailabilityTransactions.items;
    setLastFinalizedTransaction(txns[0] as DataAvailabilityTransactionUnion);
    setLatestTransactions(txns as Array<DataAvailabilityTransactionUnion>);
  };

  const { loading } = useDaTransactionsQuery({
    variables: { request: { limit: LATEST_TXNS_FETCH_COUNT } },
    onCompleted
  });

  const fetchCounts = async () => {
    const { data: countData } = await fetchAllCount();
    setAllTransactionsCount(countData?.dataAvailabilitySummary.totalTransactions ?? 0);
    const { data: submittersData } = await fetchTopSubmitter();
    setAllTransactionsCount(countData?.dataAvailabilitySummary.totalTransactions ?? 0);
    if (submittersData?.dataAvailabilitySubmitters?.items[0]) {
      setTopSubmitter(submittersData?.dataAvailabilitySubmitters?.items[0]);
    }
  };

  useEffect(() => {
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
      const txn = daData?.newDataAvailabilityTransaction as DataAvailabilityTransactionUnion;
      setLastFinalizedTransaction({ ...txn });
      let oldTxns = [...(latestTransactions as DataAvailabilityTransactionUnion[])];
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
          className="text-[13px] font-medium uppercase leading-[15px] tracking-[-0.2px] text-[#3D4B41] hover:opacity-70 dark:text-[#FFEBB8]"
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
