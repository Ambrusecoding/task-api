import { loadAbort } from "../utilities/loadAbortAxios";
import HelpService from "../utilities/helpService";
import config from "../config/settings.json";
import { axios as http } from "../frameworks_and_drivers/Axios";
import { AxiosCall } from "../models/global.interface";

/**
 * Function to made a get all with Axios controllers
 * @type {T} T - Generic Type of the response
 * @param {string} path - Path to the api
 * @param {any} props - Object with keys and values of the needed querys
 * @return {AxiosCall<unknown>} Axios call - return a promise with the response
 */
export const getAllFromUrl = <T>(
  path: string,
  props: any
): AxiosCall<unknown> => {
  const controller = loadAbort();
  const { query } = props;
  const URL = `${config.BASE_URL}/${path}?${HelpService.getQueryString(query)}`;
  return {
    call: http.get<T>(URL, {
      signal: controller.signal,
      headers: { Authorization: `Bearer ${config.TOKEN}` },
    }),
    controller,
  };
};
