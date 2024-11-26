'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function UsuarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
