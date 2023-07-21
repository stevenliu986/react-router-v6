import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
        */}
        <Routes>
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
