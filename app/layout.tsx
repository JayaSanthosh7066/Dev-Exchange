import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${spacegrotesk.variable}`}
        suppressHydrationWarning={true}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
