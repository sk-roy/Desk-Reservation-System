import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeIcon from "./components/icons/HomeIcon";
import ReservationIcon from "./components/icons/ReservationIcon";
import AnalyticsIcon from "./components/icons/AnalyticsIcon";
import TeamIcon from "./components/icons/TeamIcon";
import LocationIcon from "./components/icons/LocationIcon";
import UserIcon from "./components/icons/UserIcon";
import AttendanceIcon from "./components/icons/AttendanceIcon";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={"loading..."}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import("./pages/home")));
const Reservation = Loader(lazy(() => import("./pages/reservation")));
const Analytics = Loader(lazy(() => import("./pages/analytics")));
const Team = Loader(lazy(() => import("./pages/team")));
const Location = Loader(lazy(() => import("./pages/location")));
const Attendence = Loader(lazy(() => import("./pages/attendence")));
const Users = Loader(lazy(() => import("./pages/users")));
const Integrations = Loader(lazy(() => import("./pages/integrations")));


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/reservation",
      element: <Reservation />,
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
    {
      path: "/attendence",
      element: <Attendence />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/integrations",
      element: <Integrations />,
    },
]);


export const tablist = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Reservation",
    path: "/reservation",
    icon: <ReservationIcon />,
  },
  {
    name: "Attendence",
    path: "/attendence",
    icon: <AttendanceIcon />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <UserIcon />,
  },
  {
    name: "Location",
    path: "/location",
    icon: <LocationIcon />,
  },
  {
    name: "Integrations",
    path: "/integrations",
    icon: <Integrations />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    name: "DRS Team",
    path: "/team",
    icon: <TeamIcon />,
  },
];
  