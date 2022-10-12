import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.component";
import Dashboard from "./pages/Dashboard.page";
import NotFound from "./pages/NotFound.page";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Other Routes */}
      <Route path="*">
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
