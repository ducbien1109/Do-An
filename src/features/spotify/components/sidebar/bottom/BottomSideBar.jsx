import { VscLibrary } from "react-icons/vsc";
import { useSelector } from "react-redux";
import SideBarLink from "./SideBarLink";
export default function BottomSideBar() {
  const { playlists } = useSelector((state) => state.spotify);
  return (
    <div className=" flex flex-col bg-[#121212] rounded-lg px-4 py-2 overflow-scroll min-h-[80%]">
      <div className="flex gap-2 items-center font-bold text-xl 2xl:text-3xl mb-2">
        <VscLibrary />
        <p>Your Library</p>
      </div>
      <div className=" overflow-scroll">
        {playlists && (
          <ul className="flex gap-2 md:flex-col">
            {playlists.map((item) => (
              <SideBarLink item={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
