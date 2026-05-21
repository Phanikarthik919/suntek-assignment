import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useUsers } from "../context/UserContext";

export default function RootLayout() {
  const { message, error } = useUsers();

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1d1d1f] bg-[#fbfbfd] selection:bg-[#0071e3]/20">
      <Header />

      {/* Global toast notifications */}
      {message && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-xl border border-[#d2d2d7]/50 text-[#1d1d1f] px-6 py-3 rounded-full shadow-md text-[14px] font-medium animate-bounce flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#34c759]"></div> {message}
        </div>
      )}
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-xl border border-[#d2d2d7]/50 text-[#1d1d1f] px-6 py-3 rounded-full shadow-md text-[14px] font-medium animate-bounce flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-[#ff3b30]"></div> {error}
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
