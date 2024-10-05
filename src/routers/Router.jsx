import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            `https://pro-course-3xlz8a6qc-mahiuddinzilanis-projects.vercel.app/`
          ),
        element: <Home />,
      },
      {
        path: "/products",
        loader: () =>
          fetch(
            `https://pro-course-3xlz8a6qc-mahiuddinzilanis-projects.vercel.app/courses/`
          ),
        element: <Products />,
      },
    ],
  },
]);

export default router;
