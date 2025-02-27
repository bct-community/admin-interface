import { Outlet } from "react-router-dom";

import Navigator from "./Navigator";

const Layout = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navigator />
      <div className="parent-component-that-already-fills-the-whole-screen flex h-full flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
