import type { FC } from 'react';
import { useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import isDataVerified from '@/utils/isDataVerified';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface VerifyProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
}

const Verify: FC<VerifyProps> = ({ dataAvailabilityTransaction }) => {
  const [nodeUrl, setNodeUrl] = useState<string>('');
  const [status, setStatus] = useState<'UNKNOWN' | 'VERIFIED' | 'NOT_VERIFIED'>('UNKNOWN');
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  return (
    <div className="w-full">
      <div className="space-y-3">
        <div>
          <Input
            label="Verify with your own node URL"
            placeholder="Your node URL"
            type="text"
            value={nodeUrl}
            onChange={(e) => setNodeUrl(e.target.value)}
          />
          <div className="mt-1 text-xs">It must be an archive node</div>
        </div>
        <Button
          type="button"
          onClick={() => {
            isDataVerified(dataAvailabilityTransaction.transactionId, nodeUrl, selectedEnvironment.id).then(
              (isVerified) => setStatus(isVerified ? 'VERIFIED' : 'NOT_VERIFIED')
            );
          }}
        >
          Verify
        </Button>
      </div>
      {status === 'UNKNOWN' ? null : status === 'VERIFIED' ? (
        <div className="mt-5 font-bold text-green-500">Verified</div>
      ) : (
        <div className="mt-5 font-bold text-yellow-500">Not verified</div>
      )}
    </div>
  );
};

export default Verify;
