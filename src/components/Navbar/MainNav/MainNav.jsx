import { Link, useNavigate } from "react-router-dom";
import { CurrencyDollarIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/Elements/Button";

export const MainNav = ({ returnUrl }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-center w-full bg-gray-100 border-b border-gray-300">
      <div className="flex w-full items-center gap-1 px-3 h-16 max-w-3xl">
        {returnUrl && (
          <Link to={returnUrl}>
            <ArrowLeftCircleIcon className="h-8 text-gray-800" />
          </Link>
        )}
        <button className="flex" onClick={() => navigate("/")}>
          <CurrencyDollarIcon className="h-8 text-gray-800" />
          <h3 className="text-2xl font-extrabold text-gray-800">Dink</h3>
        </button>
        <div className="flex justify-end flex-grow items-center gap-1">
          <Button
            text={"Accounts"}
            style="ghost"
            onClick={() => navigate("/accounts")}
          />
          <Button
            text={"Funds"}
            style="ghost"
            onClick={() => navigate("/funds")}
          />
          <Button
            text={"Budget"}
            style="ghost"
            onClick={() => navigate("/budgets")}
          />
        </div>
        <div className="flex justify-end flex-grow items-center gap-1">
          <Link to="/user/profile">
            <UserCircleIcon className="h-8 text-gray-800" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
