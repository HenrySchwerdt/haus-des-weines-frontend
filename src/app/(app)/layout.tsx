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
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body className={`font-sans ${inter.variable} flex flex-col min-h-screen`}>
        <HeaderServer />
        {children}
        <FooterServer />
      </body>
    </html>
  );
}
