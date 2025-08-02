
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import ParallaxWrapper from "@/lib/ParallaxWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nestico - Your Trusted Home Service Partner",
  description: "Upgrade your space with Nestico — Bangladesh’s trusted platform for walk-in showers, cleaning, plumbing, kitchen remodeling, and more. Stress-free, stylish, and always on time.",
  icons: {
    icon: "/images/logo/nesticoFav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        
         <ParallaxWrapper>
          <main className="flex-grow">{children}</main>
        </ParallaxWrapper>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
