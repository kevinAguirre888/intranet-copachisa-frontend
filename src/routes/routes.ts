import { createBrowserRouter } from "react-router";

import LandingLayout from "@/features/landing/layouts/LandingLayout";
import AtraccionTalentoPage from "@/features/atraccion-talento/pages/AtraccionTalentoPage";

import LoginPage from "@/features/auth/pages/LoginPage";
import { AuthLayout } from "@/features/auth/layouts/AuthLayout";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: LandingLayout,
      children: [{ index: true, Component: AtraccionTalentoPage }],
    },
    {
      path: "auth",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          Component: LoginPage,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
