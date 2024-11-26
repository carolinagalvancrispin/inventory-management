'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function PedidosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
