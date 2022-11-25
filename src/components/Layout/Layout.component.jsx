import { Outlet } from "react-router";

import Header from "./Header.component.jsx";
import Sidebar from "./Sidebar.component.jsx";

/**
 * Layout component
 * @component
 * @returns {React.ReactElement}
 */
const layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
