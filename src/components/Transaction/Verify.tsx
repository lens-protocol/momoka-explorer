import { StopCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';
import { useState } from 'react';

import type { MomokaTransaction } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import isDataVerified from '@/utils/isDataVerified';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface VerifyProps {
  momokaTransaction: MomokaTransaction;
}

const Verify: FC<VerifyProps> = ({ momokaTransaction }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const [nodeUrl, setNodeUrl] = useState<string>(
    selectedEnvironment.id === 'mainnet'
      ? 'https://rpc.ankr.com/polygon'
      : 'https://rpc.ankr.com/polygon_mumbai'
  );
  const [status, setStatus] = useState<'UNKNOWN' | 'VERIFIED' | 'NOT_VERIFIED'>('UNKNOWN');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<any>();

  return (
    <div className="w-full">
      <div className="space-y-3">
        <div>
          <Input
            label="You can use your own node by replacing the below, it must be an archive node"
            placeholder="Public RPC node"
            type="text"
            value={nodeUrl}
            onChange={(e) => setNodeUrl(e.target.value)}
          />
        </div>
        <Button
          type="button"
          disabled={!nodeUrl}
          className="px-5 py-3 text-[13px] font-bold uppercase leading-[13px] text-[#383838]"
          onClick={() => {
            setLoading(true);
            isDataVerified(momokaTransaction.transactionId, nodeUrl, selectedEnvironment.id)
              .then(({ verified, message }) => {
                setStatus(verified ? 'VERIFIED' : 'NOT_VERIFIED');
                setMessage(message);
              })
              .finally(() => setLoading(false));
          }}
        >
          Verify
        </Button>
      </div>
      {loading ? (
        <div className="mt-5 flex items-center space-x-2 font-bold">
          <StopCircleIcon className="h-5 w-5 animate-spin" />
          <span>Verifying...</span>
        </div>
      ) : status === 'UNKNOWN' ? null : status === 'VERIFIED' ? (
        <div className="mt-5 flex items-center space-x-2 font-bold text-green-500">
          <CheckCircleIcon className="h-5 w-5" />
          <span>Verified</span>
        </div>
      ) : (
        <div className="mt-5 flex items-center space-x-2 font-bold text-yellow-500">
          <XCircleIcon className="h-5 w-5" />
          <span>Not verified</span>
        </div>
      )}
      {status === 'NOT_VERIFIED' && message ? (
        <div className="mt-5">
          <b>Message: </b>
          <span>{JSON.stringify(message)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Verify;
