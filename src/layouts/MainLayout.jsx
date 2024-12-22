import { Outlet } from "react-router-dom";
import Header from "../projec01/Header";
import Content from "../projec01/Content";
import Hunter from "../projec01/Hunter";
import Footer from "../projec01/Footer";

function MainLayout() {
  return (
    <div className="h-screen">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
