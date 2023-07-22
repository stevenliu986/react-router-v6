import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const C = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const handle = () => {
    navigate("/a");
  };
  return (
    <div>
      <p>C组件内容</p>
      <button onClick={handle}>返回首页</button>
    </div>
  );
};

export default C;
