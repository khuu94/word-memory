import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Word Memory Game",
    description:
        "A fun and engaging word matching game to test and improve your vocabulary skills.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gossip-50`}>
                <Sidebar></Sidebar>
                <section className="relative left-16 w-[calc(100%-4rem)]">
                    {children}
                </section>
            </body>
        </html>
    );
}
