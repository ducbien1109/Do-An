import { Button } from "antd";
import React from "react";

const BtnComponent = (prop) => {
    const {color, handleClick, name, styleBtn} = prop
  return (
    <div>
      <Button type={color} onClick={handleClick} className={styleBtn} danger >
      {name}
      </Button>
    </div>
  );
};

export default BtnComponent;
