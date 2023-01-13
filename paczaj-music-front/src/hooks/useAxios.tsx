import { useEffect, useState } from 'react';
import axios from 'axios';

interface RequestDataTypes {
  method?: string;
  url: string;
  body?: Object;
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
  useEffect(() => {
    const startTime = new Date();
    if (trigger === null || trigger !== undefined) {
      setIsLoading(true);
      axios({
        method: requestData.method ? requestData.method : 'GET',
        url: requestData.url,
        data: requestData.body ? requestData.body : null,
      }).then((response) => {
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
      });
    }
    // eslint-disable-next-line
  }, [trigger]);
  return { isLoading, responseData, responseStatus, responseCode };
};

export default useAxios;
