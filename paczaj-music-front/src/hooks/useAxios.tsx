import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface RequestDataTypes {
  method?: string;
  url: string;
  body?: Object;
}

interface ErrorTypes {
  message?: string;
  status?: number;
}

const useAxios = (
  trigger: number | string | Object | undefined | null,
  requestData: RequestDataTypes,
  SetStateAction?: Function | undefined,
  delayTime?: number | undefined
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const [responseCode, setResponseCode] = useState<number | null>(null);
  const [error, setError] = useState<ErrorTypes | undefined>(undefined);
  useEffect(() => {
    const startTime = new Date();
    if (trigger === null || trigger !== undefined) {
      setIsLoading(true);
      axios({
        method: requestData.method ? requestData.method : 'GET',
        url: requestData.url,
        data: requestData.body ? requestData.body : null,
      })
        .then((response) => {
          const endTime = new Date();
          const responseTime = endTime.getTime() - startTime.getTime();
          let delay;

          if (!delayTime) {
            delay = responseTime > 500 ? 0 : 500 - responseTime;
          } else {
            delay = responseTime > delayTime ? 0 : delayTime - responseTime;
          }
          setTimeout(() => {
            setIsLoading(false);
            setResponseData(response.data);
            setResponseStatus(response.statusText);
            setResponseCode(response.status);
            SetStateAction && SetStateAction(response.data);
          }, delay);
        })
        .catch((error: AxiosError) => {
          if (error.response) {
            setError({ message: error.message, status: error.response.status });
            setIsLoading(false);
            console.log(error.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.message);
            setError({ message: error.message });
            setIsLoading(false);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
  return { isLoading, responseData, responseStatus, responseCode, error };
};

export default useAxios;
