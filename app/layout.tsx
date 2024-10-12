import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import AppHeader from "@/src/ui/navigation/app-header/AppHeader";
import { ThemeProvider } from "@mui/system";
import theme from "@/src/styles/theme";
import Footer from "@/src/ui/common/footer/Footer";
import TopHeader from "@/src/ui/navigation/top-header/TopHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Knoockadoon Youth Week",
  description:
    "The Knockadoon Youth Week (KYW) is a residential summer camp located at Knockadoon Camp, Co.Cork. The camp runs for 4 weeks each summer with an average of 100 campers on each week. The age of attendees is 10-17 year olds.",
  keywords: ["KYW", "Knockadoon", "Youth", "Week", "Summer", "Camp", "Cork"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopHeader />
            <AppHeader />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
