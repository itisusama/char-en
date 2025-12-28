import { store } from "@/imports/hooks-and-store";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout() {
  const useStore = store.useUserStore()
  
  if (!useStore.hydrated) {
    return null;
  }

  if (!useStore.user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 gap-0">
        <div><Navbar/></div>
        <main className="mt-5 px-6"><Outlet/></main>
        <div><Footer/></div>
      </div>
    </>
  );
}
