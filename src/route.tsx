import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Booking from "./pages/reservation";
// import Home from "./pages/home";
// import Error from "./pages/error";
// import Analytics from "./pages/analytics";
// import Team from "./pages/team";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={"loading..."}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import("./pages/home")));
const Booking = Loader(lazy(() => import("./pages/reservation/reservationAntD")));
const Analytics = Loader(lazy(() => import("./pages/analytics")));
const Team = Loader(lazy(() => import("./pages/team")));


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
    {
      path: "/team",
      element: <Team />,
    },
]);
  