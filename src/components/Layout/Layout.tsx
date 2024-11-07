import MainContent from "./MainContent";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      <Navbar/>
      <MainContent/>
    </div>
  );
};

export default Layout;
