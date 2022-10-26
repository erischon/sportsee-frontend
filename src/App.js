import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.component";
import Dashboard from "./pages/Dashboard.page";
import NotFound from "./pages/NotFound.page";
import Service from "./utils/service2";

function App() {
  // let data = null;

  // (async () => {
  //   data = await Service();
  // })();
  // console.log("======APP", data);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
      </Route>

      {/* Other Routes */}
      <Route path="*">
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
