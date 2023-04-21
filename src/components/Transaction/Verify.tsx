import type { FC } from 'react';
import { useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useAppStore } from '@/store/app';
import isDataVerified from '@/utils/isDataVerified';

interface VerifyProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
}

const Verify: FC<VerifyProps> = ({ dataAvailabilityTransaction }) => {
  const [nodeUrl, setNodeUrl] = useState<string>('');
  const [status, setStatus] = useState<'UNKNOWN' | 'VERIFIED' | 'NOT_VERIFIED'>('UNKNOWN');
  const selectedEnvironment = useAppStore((state) => state.selectedEnvironment);

  return (
    <div>
      <div>
        <input type="text" value={nodeUrl} onChange={(e) => setNodeUrl(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            isDataVerified(dataAvailabilityTransaction.transactionId, nodeUrl, selectedEnvironment.id).then(
              (isVerified) => setStatus(isVerified ? 'VERIFIED' : 'NOT_VERIFIED')
            );
          }}
        >
          Verify
        </button>
      </div>
      {status === 'UNKNOWN' ? null : status === 'VERIFIED' ? <div>Verified</div> : <div>Not verified</div>}
    </div>
  );
};

export default Verify;
