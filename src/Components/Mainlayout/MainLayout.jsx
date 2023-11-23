import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-screen-xl mx-auto mt-5 mb-5">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
