import { Outlet } from "react-router";

import Header from "./Header.component.jsx";
import Sidebar from "./Sidebar.component.jsx";

const layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default layout;
