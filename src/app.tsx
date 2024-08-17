import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./RootLayout";
import "./index.css";

let router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/react-router-route-lazy/",
        lazy: () => import("./Root"),
      },
      {
        path: "/react-router-route-lazy/foo",
        lazy: () => import("./Foo"),
      },
      {
        path: "/react-router-route-lazy/bar",
        lazy: () => import("./Bar"),
      },
      {
        path: "*",
        loader: () => redirect("/react-router-route-lazy/"),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
