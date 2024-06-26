import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Marketplace from "./pages/Marketplace/Marketplace.tsx";
import Ratings from "./pages/Ratings/Ratings.tsx";
import Competitions from "./pages/Competitions/Competitions.tsx";
import Organizations from "./pages/Organizations/Organizations.tsx";
import Feed from "./pages/Feed/Feed.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Feed />
      </Layout>
    ),
  },
  {
    path: "/feed",
    element: (
      <Layout>
        <Feed />
      </Layout>
    ),
  },
  {
    path: "/marketplace",
    element: (
      <Layout>
        <Marketplace />
      </Layout>
    ),
  },
  {
    path: "/ratings",
    element: (
      <Layout>
        <Ratings />
      </Layout>
    ),
  },
  {
    path: "/competitions",
    element: (
      <Layout>
        <Competitions />
      </Layout>
    ),
  },
  {
    path: "/organizations",
    element: (
      <Layout>
        <Organizations />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
