import { createBrowserRouter } from "react-router-dom";
import Booking from "./pages/booking";
import Bookmark from "./pages/bookmark";
import Home from "./pages/home";
import Error from "./pages/error";
import Analytics from "./pages/analytics";
import Profile from "./pages/profile";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/booking",
      element: <Booking />,
      errorElement: <Error />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
      errorElement: <Error />,
    },
    {
      path: "/bookmarks",
      element: <Bookmark />,
      errorElement: <Error />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <Error />,
    },
  ]);
  