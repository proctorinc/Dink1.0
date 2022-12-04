import useFetch from "@/hooks/useFetch";
import { getLinkTokenForUser } from "../api/getLinkTokenForUser";

const useLinkToken = () => {
  const { data, isLoading, error } = useFetch({
    query: getLinkTokenForUser,
  });

  return {
    linkToken: !isLoading && !error ? data.link_token : null,
  };
};

export default useLinkToken;