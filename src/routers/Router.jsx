import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import CourseDetails from "../pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        // loader: () =>
        //   fetch(
        //     `https://pro-course-3xlz8a6qc-mahiuddinzilanis-projects.vercel.app/`
        //   ),
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
      {
        path: "/products/:id",
        loader: ({ params }) => params,
        element: <CourseDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
