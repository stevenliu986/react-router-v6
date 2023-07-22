import React from "react";
import { useNavigate } from "react-router-dom";

const B = () => {
  const navigate = useNavigate();
  const handle = () => {
    // 问号传参
    /* navigate({
      pathname: "/c",
      search: qs.stringify({
        id: 100,
        name: "hello world",
      }),
    }); */
    /* // 路径传参
    navigate('/c/100/hello-world'); */
    // 隐式传参
    navigate("/c", {
      replace: true,
      state: {
        id: 100,
        name: "hello world",
      },
    });
  };
  return (
    <div>
      B组件内容！
      <button onClick={handle}>按键</button>
    </div>
  );
};

export default B;
