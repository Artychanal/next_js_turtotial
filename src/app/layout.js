import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artychanal",
  description: "My cool next js website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
