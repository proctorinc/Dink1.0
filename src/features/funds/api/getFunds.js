import { fetchQuery } from "@/lib/fetchQuery";

export const getFunds = async () => {
  return fetchQuery({
    endpoint: "/bank/funds",
  });
};
