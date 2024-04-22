import { VscLibrary } from "react-icons/vsc";
import { useSelector } from "react-redux";
import SideBarLink from "./SideBarLink";
import getList from "../../../Api/list";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rain from "../../../../../rain/Rain";

export default function BottomSideBar() {
  const [showRain, setShowRain] = useState(true);

  const { playlists } = useSelector((state) => state.spotify);
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  const handleContent = () => {
    console.log(123);
    setShowRain(true);
    navigate("/content");
  };
  const getAllData = async () => {
    const response = await getList.getAll();
    setListData(response.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="flex flex-col bg-[#121212] rounded-lg px-4 py-2 overflow-scroll min-h-[80%]">
      <div className="flex gap-2 items-center font-bold text-xl 2xl:text-3xl mb-2">
        <VscLibrary />
        <p>Your Library</p>
      </div>
      <div className="overflow-scroll">
        {playlists && (
          <ul className="flex gap-2 md:flex-col">
            {playlists.map((item) => (
              <SideBarLink item={item} key={item.id} />
            ))}
          </ul>
        )}

        <div className="album-api" onClick={handleContent}>
          <div className="img-mtp" style={{borderRadius:'100'}}>
            <img src="https://i.pinimg.com/236x/c2/9a/7d/c29a7d29348b1a3f502803ab9d8355cc.jpg" />
          </div>
          <div style={{zIndex:'999'}}>
            <p>Nhac Kpop</p>
            <p>playlist</p>
          </div>
        </div>
      </div>
      {showRain && <Rain />}
    </div>
  );
}
