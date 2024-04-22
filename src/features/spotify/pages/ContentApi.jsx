import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/body/NavBar";
import SideBar from "../components/sidebar/SideBar";
import { Link, Outlet } from "react-router-dom";
import getList from "../Api/list";
import { ArrowRightOutlined } from "@ant-design/icons";

const ContentApi = () => {
  const [listData, setListData] = useState([]);

  const getAllData = async () => {
    const response = await getList.getAll();
    setListData(response.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <div className=" h-[100vh] flex flex-col text-white bg-black">
        <div className=" flex min-h-[85vh] p-2 gap-2 md:flex-row flex-col">
          <SideBar />
          <div className="flex flex-col bg-[#121212] rounded-lg p-2 md:w-[65vw] lg:w-[75vw] overflow-hidden">
            <NavBar />
            <Outlet />
            <div className="content-music" style={{width:'100%'}}>
              <table className="table-auto" style={{width:'100%', textAlign:'left'}}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Playlist</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          width={50}
                          height={50}
                          style={{ borderRadius: "50px" }}
                          src={item.img}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>playlist</td>
                      <td>
                        <Link
                          to={`/detailContentMusic/${item.id}`}
                          className="icon-right"
                        >
                          <ArrowRightOutlined />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContentApi;
