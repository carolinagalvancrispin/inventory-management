'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function ReportesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
