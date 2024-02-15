import { getAllFromUrl } from "../utilities/apiCallsFromUrl";

export const getAllOrganizationAPI = (props: any) => {
  const query = props;
  return getAllFromUrl("organizations", { query });
};
