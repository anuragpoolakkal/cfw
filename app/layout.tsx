import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Concrete Furniture Works",
	description: "Product Showcase Website for CFW Thrissur",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/doyr-logo.png" sizes="any" />
			</head>
			<body className={inter.className}>
				<HeaderTop />
				<HeaderMain />
				<Navbar />
				<MobNavbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}