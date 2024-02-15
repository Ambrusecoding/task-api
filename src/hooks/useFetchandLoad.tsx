/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-unused-expressions */
/* eslint-disable curly */
import { AxiosCall } from "../models/global.interface";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  let controller: AbortController;

  /**
   * Call api with axios controller - if unmounu components cancel calling
   * @param {AxiosCall<any>} axiosCall - Axios request with contoller
   * @param {any} errorFunction - Function to call when api call fails
   * @param {Function} adapter - Funtion to adapt data to DOM
   *
   * @return {Promise<any>} Return the API response or the adapted data
   */
  const callEndpoint = async (
    axiosCall: AxiosCall<any>,
    errorFunction?: any,
    adapter?: Function
  ) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      setError(false);
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      setError(true);
      errorFunction && errorFunction(err);
      throw err;
    } finally {
      setLoading(false);
    }
    return adapter ? adapter(result) : result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint, error, setError };
};

export default useFetchAndLoad;
