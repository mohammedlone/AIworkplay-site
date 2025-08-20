import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Work & Play — Top AI tools for work & fun",
  description:
    "Curated Top 5 AI tools in each category. Search fast, launch faster.",
  icons: [
    // Emoji favicon via data URL (no file required)
    {
      rel: "icon",
      url:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E⚡%3C/text%3E%3C/svg%3E"
    }
  ],
  openGraph: {
    title: "AI Work & Play",
    description: "Curated Top 5 AI tools in each category.",
    url: "https://aiworkplay.com",
    siteName: "AI Work & Play",
    // External OG image (no file in /public required)
    images: [
      {
        url:
          "https://dummyimage.com/1200x630/0ea5e9/ffffff.png&text=AI+Work+%26+Play",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Work & Play",
    description: "Curated Top 5 AI tools in each category.",
    images: [
      "https://dummyimage.com/1200x630/0ea5e9/ffffff.png&text=AI+Work+%26+Play"
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
