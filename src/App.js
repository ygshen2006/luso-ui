import { publicRoutes } from "Routes/public";
import { adminRoutes } from "Routes/admin";

import Layout from "components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { demoRouters } from "Routes/demo";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...publicRoutes, ...adminRoutes, ...demoRouters],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
