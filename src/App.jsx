import "../index.scss";
import HomePage from "./routes/homePage/homePage";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequiredAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./routes/profilePage/profile";
import Login from "./routes/Login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddNewPost from "./routes/addNewPost/addNewPost";
import {
  listPageLoader,
  singlePageLoader,
  profilePageLoader,
} from "./lib/loader";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },

        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/register",
          element: <Register />,
        },
      ],
    },

    {
      path: "/",
      element: <RequiredAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profilePageLoader,
        },

        {
          path: "/update-profile",
          element: <ProfileUpdatePage />,
        },

        {
          path: "/add-post",
          element: <AddNewPost />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
