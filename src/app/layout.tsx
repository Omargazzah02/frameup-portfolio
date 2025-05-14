import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-...INSÈRE-LE-BON-INTEGRITY..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body  
      >
       
      <Navbar></Navbar>
      

              {children}

      </body>
    </html>
  );
}
