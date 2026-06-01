import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'McDonald\'s - Taste the Golden Arches, Feel the Happiness',
  description: 'Visit McDonald\'s for classic burgers, crispy fries, and delicious treats. Order online, find locations, and discover our latest menu items and seasonal specials.',
  keywords: ["McDonald's, fast food, burgers, fries, Happy Meal, Big Mac, menu, order online, restaurant, drive-through, delivery"],
  openGraph: {
    "title": "McDonald's - Taste the Golden Arches, Feel the Happiness",
    "description": "Visit McDonald's for classic burgers, crispy fries, and delicious treats. Order online, find locations, and discover our latest menu items and seasonal specials.",
    "url": "https://www.mcdonalds.com",
    "siteName": "McDonald's",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cheeseburger-with-fresh-vegetables-pickles-dark-background_84443-94664.jpg",
        "alt": "Delicious McDonald's Big Mac burger with fries"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "McDonald's - Taste the Golden Arches, Feel the Happiness",
    "description": "Visit McDonald's for classic burgers, crispy fries, and delicious treats. Order online, find locations, and discover our latest menu items and seasonal specials.",
    "images": [
      "http://img.b2bpic.net/free-photo/cheeseburger-with-fresh-vegetables-pickles-dark-background_84443-94664.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
