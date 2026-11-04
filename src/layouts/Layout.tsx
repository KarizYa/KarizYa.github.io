import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";

function storedDark(): boolean {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}

export default function Layout() {
  const [dark, setDark] = useState(storedDark);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* penyimpanan tidak tersedia; tema tetap berlaku untuk sesi ini */
    }
  }, [dark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-page pt-[18px] pb-10">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">
        Lewati ke konten
      </a>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <Header dark={dark} onToggle={() => setDark((d) => !d)} />
        <div className="grid gap-x-[20px] gap-y-[10px] lg:grid-cols-[400px_minmax(0,1fr)] lg:items-stretch">
          <div className="lg:col-start-2 lg:row-start-1">
            <NavBar />
          </div>
          <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:-mt-[20px] lg:self-stretch">
            <ProfileCard />
          </div>
          <main id="main" className="lg:col-start-2 lg:row-start-2 lg:self-stretch">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
