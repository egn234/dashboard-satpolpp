import "./styles/globals.css";
import { Metadata } from "next";
import PrelineScript from "@/app/components/PrelineScript";

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
      <PrelineScript />
    </html>
  );
}