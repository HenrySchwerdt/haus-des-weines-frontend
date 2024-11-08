import "./globals.css";
import { Inter } from "next/font/google";
import HeaderServer from "@/components/header/Server";
import FooterServer from "@/components/footer/Server";
import { CookieConsentClient } from "@/components/cookie/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Haus des Weines",
  description: "",
};


export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  const lang: 'de' | 'en' = locale === 'en' ? 'en' : 'de';

  return (
    <html lang={lang}>
      <body className={`font-sans flex flex-col min-h-screen`}>
        <HeaderServer lang={lang} />
        {children}
        <CookieConsentClient lang={lang} />

        <FooterServer lang={lang} />
      </body>
    </html>
  );
}
