import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Chukwu | Web Developer",
  description:
    "Matthew is a full stack developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
  verification: {
    google: "FUEOtzbOq6CDoNsSr6EdGUHNTvhV9HM-S0r_rIyCNCw",
  },
  twitter: {
    card: "summary",
    title: "Matthew Chukwu | Web Developer",
    description:
      "Matthew is a full stack developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
  },
  openGraph: {
    title: "Matthew Chukwu - CodeMat | Web Developer",
    description:
      "Matthew is a full stack developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
    url: "https://matthewchukwu.com.ng",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    // authors: ["Matthew Chukwu"],
  },
  robots: {
    index: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
           {children}
          </ThemeProvider>
       </body>
    </html>
  );
}
