'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function EstudianteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
