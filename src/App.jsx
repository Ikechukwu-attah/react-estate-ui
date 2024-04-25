import "../index.scss";
import HomePage from "./routes/homePage/homePage";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layouts from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
