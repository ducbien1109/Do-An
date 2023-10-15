import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import LogOut from "../../../login/components/LogOut";
export default function NavBar() {
  const { isShowSearch } = useSelector((state) => state.spotify);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    const searchQuery = value.replace(" ", "%20");
    setSearchQuery(searchQuery);
  };
  useEffect(() => {
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
  }, [searchQuery]);
  return (
    <div className="flex justify-between p-2 items-center">
      <div>
        {isShowSearch && (
          <div className="flex items-center bg-slate-800 text-slate-200 rounded-[50px] px-4 p-2 gap-2 text-[16px]">
            <label>
              <CiSearch />
            </label>
            <input
              className="bg-inherit px-2 focus:outline-none"
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <LogOut />
      </div>
    </div>
  );
}
