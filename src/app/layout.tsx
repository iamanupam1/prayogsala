
import { Metadata } from 'next';
// import { usePathname } from 'next/navigation';
// import Header from "@/components/ui/Header";
import TopBar from '@/components/ui/TopBar';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Susankhya Prayogshala',
  description: 'Learn Anything, Anywhere',
};


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // const pathname = usePathname();
  // const hideFooter = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* {!hideFooter && <Footer />} */}
      </body>
    </html>
  );
};

export default RootLayout;
