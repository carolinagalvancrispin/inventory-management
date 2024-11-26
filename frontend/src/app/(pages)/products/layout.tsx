'use client';

import { DashboardWrapper } from "@/app/dashboardWrapper";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
