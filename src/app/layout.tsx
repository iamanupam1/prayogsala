
import { Metadata } from 'next';
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Susankhya Prayogshala',
  description: 'Learn Anything, Anywhere',
};


const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
