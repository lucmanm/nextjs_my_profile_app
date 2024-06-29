import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucman, Mahid C.",
  description: "Mr. Mahid Lucman experience, skills about Web and Graphics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-gradient-to-r from-teal-400 to-yellow-200 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
