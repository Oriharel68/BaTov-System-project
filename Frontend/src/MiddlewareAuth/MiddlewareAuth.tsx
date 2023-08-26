
import React, { useLayoutEffect } from "react";
import AxiosClient from "../ApiClient/AxiosClient";
import { useNavigate } from "react-router-dom";

function MiddlewareAuth({ children }: { children:any }) {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    
    const requstinter = AxiosClient.interceptors.request.use((config)=>{
      config.withCredentials = true;
      return config;
    },(err)=>{
      return err;
    })
    const responseinter = AxiosClient.interceptors.response.use(
      (res)=>{
      return res;

    },(err)=>{
      if(err.response.status===401){
        return navigate('/');
      }
      
      
    })
  
    return () => {
      AxiosClient.interceptors.request.eject(requstinter);
      AxiosClient.interceptors.response.eject(responseinter);
    };
  }, [])

  return <>{children}</>;
}

export default MiddlewareAuth;
