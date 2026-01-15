import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import BootScreen from "../components/ui/BootScreen";
// Remove the Dock import from here if you want, or just leave it unused.
// But definitely remove the component usage below.

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <BootScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-blue-500/30 overflow-x-hidden relative flex flex-col animate-in fade-in duration-1000">
          
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
          </div>

          <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow pb-32">
            <Outlet />
          </main>

          <Footer />
          
          {/* REMOVED <Dock /> from here */}

        </div>
      )}
    </>
  );
};

export default MainLayout;