import BottomSideBar from "./top/TopSideBar";
import TopSideBar from "./bottom/BottomSideBar";

export default function SideBar() {
  return (
    <div className=" md:w-[35vw] lg:w-[25vw] flex flex-col gap-2">
      <BottomSideBar />
      <TopSideBar />
    </div>
  );
}
