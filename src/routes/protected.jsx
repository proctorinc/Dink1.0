import { Outlet } from "react-router-dom";
import FundRoutes from "../features/funds/routes";

const App = () => {
  return <Outlet />;
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/funds/*", element: <FundRoutes /> }],
  },
];
