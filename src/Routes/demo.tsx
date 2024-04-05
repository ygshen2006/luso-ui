import { lazy } from "react";
const DemoComponent = lazy(() => import("../components/Demo/index"));
export const demoRouters = [
  {
    path: "demo",
    element: null,
    children: [
      {
        path: "/demo/test",
        element: <DemoComponent />,
      },
    ],
  },
];
