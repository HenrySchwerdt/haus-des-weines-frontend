import "./globals.css";
import { Inter } from "next/font/google";
import HeaderServer from "@/components/header/Server";
import FooterServer from "@/components/footer/Server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Haus des Weines",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default async function RootLayout({
  children,
  searchParams,
}: {
  children: React.ReactNode;
  searchParams?: { lang?: string };
}) {
  const lang: 'de' | 'en' = searchParams?.lang === 'en' ? 'en' : 'de';

  return (
    <html lang={lang}>
      <body className={`font-sans flex flex-col min-h-screen`}>
        <HeaderServer lang={lang} />
        {children}
        <FooterServer lang={lang} />
      </body>
    </html>
  );
}
