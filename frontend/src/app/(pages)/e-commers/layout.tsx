export default function EcommersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
