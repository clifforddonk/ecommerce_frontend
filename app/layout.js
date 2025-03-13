import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Online Shopping System",
  description: "All Kinds Of Clothing Available",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}  antialiased`}>{children}</body>
    </html>
  );
}
