import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeIcon from "./components/icons/HomeIcon";
import ReservationIcon from "./components/icons/ReservationIcon";
import AnalyticsIcon from "./components/icons/AnalyticsIcon";
import TeamIcon from "./components/icons/TeamIcon";
import LocationIcon from "./components/icons/LocationIcon";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={"loading..."}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import("./pages/home")));
const Booking = Loader(lazy(() => import("./pages/reservation")));
const Analytics = Loader(lazy(() => import("./pages/analytics")));
const Team = Loader(lazy(() => import("./pages/team")));
const Location = Loader(lazy(() => import("./pages/location")));


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
    {
      path: "/location",
      element: <Location />,
    },
]);


export const tablist = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Booking",
    path: "/booking",
    icon: <ReservationIcon />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    name: "Team",
    path: "/team",
    icon: <TeamIcon />,
  },
  {
    name: "Location",
    path: "/location",
    icon: <LocationIcon />,
  },
];
  