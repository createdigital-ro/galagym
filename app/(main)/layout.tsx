import Announcement from "@/app/_components/Announcement";
import Navigation from "@/app/_components/Navigation";
import { basier } from "@/utils/fonts";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import "@/app/globals.css";
import Footer from "../_components/Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={basier.className}>
        <Announcement message="PROGRAM DE SĂRBĂTORI: 25-26 DECEMBRIE INCHIS | 1-2 IANUARIE INCHIS" />
        <Navigation />
        <div className="max-w-[1700px] mx-auto">
          <div className="mx-4">{children}</div>
        </div>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
};

export default MainLayout;
