import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
