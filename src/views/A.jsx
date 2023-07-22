import React from "react";
import { Link, Outlet } from "react-router-dom";

import styled from "styled-components";

const DemoBox = styled.div`
  display: flex;
  background-color: pink;
  .menu {
    margin-right: 50px;
    a {
      margin-top: 20px;
      display: block;
    }
  }

  .content {
    margin-top: 20px;
  }
`;

const A = () => {
  return (
    <DemoBox>
      <div className="menu">
        <Link to="/a/a1">A1</Link>
        <Link to="/a/a2">A2</Link>
        <Link to="/a/a3">A3</Link>
      </div>
      <div className="content">
        {/* Outlet：路由容器，用来渲染二（多）级路由匹配的内容 */}
        <Outlet />
      </div>
    </DemoBox>
  );
};

export default A;
