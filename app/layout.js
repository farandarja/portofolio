import "./globals.css";

export const metadata = {
  title: "Rand — Full-stack Developer",
  description:
    "Portfolio of Rand — PHP/MySQL and Next.js developer focused on decision-support systems and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
