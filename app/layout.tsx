import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/provider/modal-provider";
import { fetchAllContentOwner, fetchAllPublisher } from "@/lib/fetch-data";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIT-Book",
  description: "This is bit book management system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentOwners = await fetchAllContentOwner();
  const publishers = await fetchAllPublisher();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar contentOwners={contentOwners} publishers={publishers} />
        {children}
        <ModalProvider />
        <Toaster />
      </body>
    </html>
  );
}
