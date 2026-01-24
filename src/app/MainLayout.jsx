import { Outlet } from "react-router-dom";
import { Header } from "../ui/Header.jsx";
import { Footer } from "../ui/Footer.jsx";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};