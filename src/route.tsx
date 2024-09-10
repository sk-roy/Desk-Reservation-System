import { createBrowserRouter } from "react-router-dom";
import Booking from "./pages/reservation";
import Home from "./pages/home";
import Error from "./pages/error";
import Analytics from "./pages/analytics";
import Team from "./pages/team";


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
      path: "/team",
      element: <Team />,
      errorElement: <Error />,
    },
  ]);
  