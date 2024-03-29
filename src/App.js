import { publicRoutes } from 'Routes/public';
import { adminRoutes } from 'Routes/admin';

import Layout from 'components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...publicRoutes, ...adminRoutes],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
