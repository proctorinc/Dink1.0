import { ACCOUNT_CATEGORIES } from "@/constants";

import AccountCategoryEntry from "./AccountCategoryEntry";
import { useAccounts } from "../hooks/useAccounts";

const AccountList = () => {
  const { data, isLoading, error } = useAccounts();

  const categoryEntries = ACCOUNT_CATEGORIES.map((category) => (
    <AccountCategoryEntry
      key={category}
      accountData={data?.categories ? data.categories[category] : null}
      category={category}
      isLoading={isLoading}
      error={error}
    />
  ));

  return <>{categoryEntries}</>;
};

export default AccountList;
