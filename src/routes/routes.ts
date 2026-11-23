import { createBrowserRouter } from "react-router";

import LandingLayout from "@/features/landing/layouts/LandingLayout";

import AtraccionTalentoPage from "@/features/atraccion-talento/pages/AtraccionTalentoPage";
/* import LandingPage from "@/features/landing/pages/LandingPage";
 */
import HomePage from "@/features/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      /* { index: true, Component: LandingPage }, */
      { index: true, Component: AtraccionTalentoPage }
    ]
  },
  {
    path: "/home",
    Component: HomePage,
  },
],
  {
    basename: import.meta.env.BASE_URL,
  }
);