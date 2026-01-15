import { geistMono, geistSans, plusJakarta } from "../Font/font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
