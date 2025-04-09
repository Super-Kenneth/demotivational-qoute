import "./globals.css";

export const metadata = {
  title: "Demotivational Quotes",
  description: "Created By Kenneth Manuel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
