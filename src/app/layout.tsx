import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./styles/index.css";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Drojas",
  description: "Portafolio 2026 - Drojas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", font.className, "font-sans", geist.variable)}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
