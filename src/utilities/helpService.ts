import { AxiosResponse } from "axios";

// GET QUERY
const getQueryString = (params: any) => {
  if (!params) return "";
  const esc = (str: string) => encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`);
  const filteredParams = Object.entries(params).reduce((acc: any, [key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {});
  return (
    Object.keys(filteredParams)
      // eslint-disable-next-line prefer-template
      .map((k) => esc(k) + "=" + esc(params[k]))
      .join("&")
  );
};
// GET CURRENCY FORMAT
const currencyFormat = (num: number) => {
  return num
    ? `INR ${num
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : num;
};

export const downloadFileFromResponse = (response: AxiosResponse, exportType: string, name: string) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${name}.${exportType}`); //or any other extension
  document.body.appendChild(link);
  link.click();
};

const service = { getQueryString, currencyFormat, downloadFileFromResponse };
export default service;