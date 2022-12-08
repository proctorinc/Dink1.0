import AccountRoutes from "@/features/accounts/routes";
import TransactionRoutes from "@/features/transactions/routes";
import { Outlet } from "react-router-dom";
import FundRoutes from "../features/funds/routes";

const App = () => {
  return <Outlet />;
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/funds/*", element: <FundRoutes /> },
      { path: "/accounts/*", element: <AccountRoutes /> },
      { path: "/transactions/*", element: <TransactionRoutes /> },
    ],
  },
];
