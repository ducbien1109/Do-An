import React from "react";
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isShowSearch } from "../../../../../actions/spotifyAction";
import LogOut from "../../../../login/components/LogOut";

export default function TopSideBar() {
  const dispatch = useDispatch();

  const handleLikedSongs = () => {
    // Thực hiện điều hướng đến trang "Liked Songs" khi click vào
    // Sử dụng react-router-dom để điều hướng
    // Ví dụ: history.push("/liked-songs")
    console.log("Navigate to Liked Songs page");
  };

  return (
    <div className="max-h-max items-center flex bg-[#121212] rounded-lg md:p-3 md:justify-between gap-3 p-2 relative md:flex-col md:items-start">
      <div
        className="hover:text-slate-300 w-fit cursor-pointer text-xl font-bold 2xl:text-2xl 2xl:py-2"
        onClick={() => {
          dispatch(isShowSearch(false));
        }}
      >
        <NavLink to={"/home"} className="flex items-center gap-2">
          <AiFillHome />
          Home
        </NavLink>
      </div>
      <div className="hover:text-slate-300 w-fit cursor-pointer text-xl font-bold 2xl:text-2xl 2xl:py-2">
        <div
          className="flex items-center gap-2"
          onClick={() => dispatch(isShowSearch(true))}
        >
          <AiOutlineSearch />
          Search
        </div>
      </div>
      <div
        className="hover:text-slate-300 w-fit cursor-pointer text-xl font-bold 2xl:text-2xl 2xl:py-2"
        onClick={handleLikedSongs} // Sử dụng hàm handleLikedSongs khi click vào Liked Songs
      >
        <NavLink to={"/liked-songs"} className="flex items-center gap-2">
          <AiFillHeart />
          Liked Songs
        </NavLink>
      </div>
      <div className="md:hidden block absolute right-2">
        <LogOut />
      </div>
    </div>
  );
}
