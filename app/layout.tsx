import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Varchasvi Pandey - Software Engineer | Web & Native",
  description: "Software development, architectures, tech blogs and articles.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <footer className="mt-24 bg-primary text-primary-foreground text-center p-4">
            refresh everyday to see progress — 2024 varchasvipandey.com
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
