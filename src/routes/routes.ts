import { createBrowserRouter } from "react-router";

import LandingLayout from "@/features/landing/layouts/LandingLayout";
import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import AtraccionTalentoPage from "@/features/atraccion-talento/pages/AtraccionTalentoPage";
import { EvaluacionesPage } from "@/features/dashboard/evaluaciones/pages/EvaluacionesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      { index: true, Component: AtraccionTalentoPage }
    ]
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      { path: "evaluaciones", Component: EvaluacionesPage }
    ]

  }
],
  {
    basename: import.meta.env.BASE_URL,
  }
);