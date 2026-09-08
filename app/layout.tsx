import type { Metadata } from "next";
import "./globals.css";
import HeroVisualPortal from "./HeroVisualPortal";

export const metadata: Metadata = {
  title: "Praveen Kumar Thanniru | Cloud & Data Platform Engineer",
  description:
    "Portfolio of Praveen Kumar Thanniru — data engineer building scalable distributed systems, cloud platforms, streaming pipelines, and production infrastructure.",
  openGraph: {
    title: "Praveen Kumar Thanniru | Cloud & Data Platform Engineer",
    description:
      "Scalable data systems, distributed infrastructure, streaming platforms, and cloud engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <HeroVisualPortal />
      </body>
    </html>
  );
}
