'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function ApoderadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
