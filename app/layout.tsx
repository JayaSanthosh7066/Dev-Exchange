import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "DevExchange",
  description:
    "A communitty driven platform for asking and answering programming questions.Get help, share knowledge,and collaborate with developers from around the world. ",
  icons: {
    icon: "/assests/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spacegrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
