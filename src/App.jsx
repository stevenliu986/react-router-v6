import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeHead from "./components/HomeHead";
// 导入需要的组件
import A from "./views/A";
import B from "./views/B";
import C from "./views/C";
function App() {
  return (
    <HashRouter>
      <HomeHead />
      <div className="content">
        {/* 
          所有的路由匹配规则，放在<Routes>中；每一条规则的匹配，是基于<Route>
            路由匹配成功，不再基于component/render控制渲染的组件，
            而是基于element，语法格式是<Component/>
            不再需要Switch，默认就是一个匹配成功，就不再匹配下面的了
            不再需要exact，默认每一项匹配都是精准匹配
            原有的<Redirect>操作被<Navigate to="/" />代替
              遇到<Navigate>组件，路由就会跳转到to指定的路由地址
              设置replace属性，则不会新增立即记录，而是替换现有记录
              to的值可以是一个对象：pathname需要跳转的地址，search问号传参信息
        */}
        <Routes>
          <Route path="/" element={<Navigate to="/a" />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          {/* 如果所有路径都不匹配，就跳到指定的路由地址 */}
          <Route path="*" element={<Navigate to="/a" />} />
          {/* <Route
            path="*"
            element={
              <Navigate
                to={{
                  pathname: "/a",
                  search: "?id=100&name=hello",
                }}
              />
            }
          /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
