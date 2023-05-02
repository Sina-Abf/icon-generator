import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import localFont from "next/font/local";

const vazir = localFont({
  variable: "--font-vazir",
  src: [
    {
      path: "../public/fonts/Vazir-Black-FD.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Bold-FD.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Light-FD.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Medium-FD.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Regular-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Thin-FD.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "آیکی دانلود",
  description: "آیکونت رو بساز!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable}`}>
      <body className="bg-gray-800 p-8 text-white container mx-auto max-w-screen-xl">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
