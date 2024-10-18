// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Đậu đậu đáng yêu",
  description: "<3",
  image: "/media/image1.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
