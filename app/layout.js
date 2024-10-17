// app/layout.js
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio showcasing images and videos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
