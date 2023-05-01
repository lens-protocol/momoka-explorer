import axios from 'axios';
import { useState } from 'react';

import { BUNDLR_SPENT_API } from '@/constants';
import { useAppStore } from '@/store/app';

const useSubmitterSpent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const setTotalSpent = useAppStore((state) => state.setTotalSpent);

  const fetchData = async (submitters: string[]) => {
    try {
      const response = await axios.post(BUNDLR_SPENT_API, submitters);
      const { amount } = await response.data;
      setTotalSpent(amount);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useSubmitterSpent;
