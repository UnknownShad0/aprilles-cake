import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Aprille’s Cake Creation",
  description: "Sweet Treats, Baked with Love",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-playfair bg-pink-50 text-gray-800">{children}</body>
    </html>
  );
}
