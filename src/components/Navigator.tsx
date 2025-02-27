import classNames from "classnames";
import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const location = useLocation().pathname;

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 px-8">
      <Shield />

      <div className="flex gap-4">
        <Link
          to="/raids"
          className={classNames({
            "text-sm hover:underline": true,
            "text-[var(--coin-pink)]": location === "/raids",
          })}
        >
          Raids
        </Link>
        <Link
          to="/links"
          className={classNames({
            "text-sm hover:underline": true,
            "text-[var(--coin-pink)]": location === "/links",
          })}
        >
          Links
        </Link>
        <Link
          to="/raids"
          className={classNames({
            "text-sm hover:underline": true,
            "text-[var(--coin-pink)]": location === "/raids",
          })}
        >
          Arts
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
