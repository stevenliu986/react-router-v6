import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

//统一渲染的组件，在这里可以做一些事情，例如：权限/登录状态校验,传递属性等
const Element = (props) => {
  let { component: Component } = props;
  // 把路由信息先获取到，最后基于属性传递给组件

  return <Component />;
};

// 递归创建Route
const createRoute = (routes) => {
  return (
    <>
      {routes.map((item, index) => {
        let { path } = item;
        /*  每一次路由匹配成功，不直接渲染我们设定的组件，而是渲染Element；在Element做一些特殊处理后，再去
            渲染我们真实要渲染的组件 */
        <Route key={index} path={path} element={<Element {...item} />} />;
      })}
    </>
  );
};

export default createRoute;
