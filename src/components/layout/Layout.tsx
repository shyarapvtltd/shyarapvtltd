import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Layout;
