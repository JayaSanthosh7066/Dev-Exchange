import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative min-h-screen">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex flex-1 flex-col">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
