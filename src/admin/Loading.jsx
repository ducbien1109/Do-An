import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        margin:'0 auto'
      }}
    >
      <Spin />
    </div>
  );
};

export default Loading;
