import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { getDictionary } from "./dictionaries";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import { LoadingProvider } from "@/contexts/LoadingContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  const params = await props.params;
  const lang = params.lang;
  const dictionary = await getDictionary(lang as "en" | "it");

  return (
    <html suppressHydrationWarning lang={lang}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-transparent font-sans antialiased",
          fontSans.variable,
          inter.className
        )}
      >
        <LoadingProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col">
              <ClientLayout dictionary={dictionary}>{children}</ClientLayout>
              <Footer />
            </div>
          </Providers>
        </LoadingProvider>
      </body>
    </html>
  );
}
