"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Preloader } from "./Preloader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
