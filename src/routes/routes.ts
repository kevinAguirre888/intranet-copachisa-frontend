import { createBrowserRouter } from "react-router";

import LandingLayout from "@/features/landing/layouts/LandingLayout";

import AtraccionTalentoPage from "@/features/atraccion-talento/pages/AtraccionTalentoPage";
/* import LandingPage from "@/features/landing/pages/LandingPage";
 */
import LoginPage from "@/features/auth/pages/LoginPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      /* { index: true, Component: LandingPage }, */
      { index: true, Component: AtraccionTalentoPage },
      { path: "/login", Component: LoginPage },
    ]
  },
],
  {
    basename: import.meta.env.BASE_URL,
  }
);