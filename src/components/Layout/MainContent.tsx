import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="bg-[#FF6F00] text-[#ffffff] flex justify-center items-center flex-1">
      <Outlet/>
    </div>
  );
};

export default MainContent;