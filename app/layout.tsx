import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Inventory Management",
  description: "Responsive business dashboard for inventory, sales, suppliers, and reports.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
