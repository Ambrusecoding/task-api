import { AxiosResponse } from "../frameworks_and_drivers/Axios";

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

export interface DataAPI {
  id: number;
  name: string;
  website_url: string;
  is_suspended: boolean;
}

export interface DataResponseAPI {
  result: { items: DataAPI[] };
}

export interface DataDOM {
  id: number;
  nameOrg: string;
  websiteUrl: string;
  isSuspended: boolean;
}
