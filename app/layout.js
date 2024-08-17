import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculator - ItsMe Prince",
  description: "Calculator Project Made using NextJS by ItsMe Prince",
  icons: {
    icon: "/calculator.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Mohd Uvaish, ItsMe Prince, Web Developer, Next.js, Tailwind CSS, Full Stack Developer, Calculator, Calculator Project" />
        <meta name="author" content="Mohd Uvaish" />
      </head>
      <body className={`${inter.className} relative`}>
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}