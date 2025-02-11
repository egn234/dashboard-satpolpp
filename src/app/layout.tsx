import "./styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Satpol PP",
  description: "Dashboard Satpol PP",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {children}
      </body>
    </html>
  );
}