import { DataAPI, DataDOM } from "../models/global.interface";

export const userGetOneAdapter = (items: DataAPI[]): DataDOM[] => {
  return items.map((item: DataAPI) => ({
    id: item.id,
    nameOrg: item.name,
    websiteUrl: item.website_url,
    isSuspended: item.is_suspended,
  }));
};
