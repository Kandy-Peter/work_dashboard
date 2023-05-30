import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type axiosRequestResponse<T> = {
  data: T | null;
  error: AxiosError | null;
  isLoading: boolean;
};

const AxiosRequest = <T>(
  config: AxiosRequestConfig,
  dependencies: any[] = []
): axiosRequestResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<T> = await axios(config);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, error, isLoading };
};

export default AxiosRequest;
