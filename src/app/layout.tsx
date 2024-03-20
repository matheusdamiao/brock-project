import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import ToastProvider from "@/components/ToastProvider";

const myFont = localFont({
  src: "./GacorPersonalUse.otf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brock-investment.netlify.app/"),
  title: "Brock Investments",
  description: "",
  openGraph: {
    images: "opengraph-image.png",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={myFont.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
