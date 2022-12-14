import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Blog from "../components/Pages/Blog/Blog";
import Register from "../components/Pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import AddService from "../components/Pages/AddService/AddService";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ServiceInfo from "../components/Pages/ServiceInfo/ServiceInfo";
import Services from "../components/Pages/Services/Services"
import EditReview from "../components/Pages/MyReviews/EditReview"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReviews />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      // {
      //   path: "/editReview/:id",
      //   element: <EditReview />,
      //   loader: ({ params }) => {
      //     return fetch(`http://localhost:5000/serviceReviews/${params.id}`)
      //    }
      // },

      {
        path: "/services/:id",
        element: <ServiceInfo />,
        loader: ({ params }) => {
         return fetch(`https://dental-buddy-server.vercel.app/services/${params.id}`);
        }
      },
    ],
  },
]);
