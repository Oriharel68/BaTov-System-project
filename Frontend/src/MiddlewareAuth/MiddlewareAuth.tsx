import React, { PropsWithChildren, useLayoutEffect } from 'react';
import AxiosClient from '../ApiClient/AxiosClient';
import { useNavigate } from 'react-router-dom';

function MiddlewareAuth({ children }: { children: PropsWithChildren }) {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const requstinter = AxiosClient.interceptors.request.use(
      (config) => {
        const accessToken = window.sessionStorage.getItem('accessToken');
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config; //adding the access token to the request
      },
      (err) => {
        return err;
      }
    );
    const responseinter = AxiosClient.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err?.response?.status === 401) {// if the response comes back with status code 401 your'e unathorized and you being sent to the first page
          return navigate('/');
        }
      }
    );

    return () => {
      AxiosClient.interceptors.request.eject(requstinter);
      AxiosClient.interceptors.response.eject(responseinter);//clean up 
    };
  }, []);

  return <>{children}</>;
}

export default MiddlewareAuth;
