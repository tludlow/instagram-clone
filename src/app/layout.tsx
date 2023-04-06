import { Inter } from "next/font/google";
import Sidebar from "~/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Instagram",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-primary text-white`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="w-full p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
