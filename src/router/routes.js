import { lazy } from "react";
import { Navigate } from "react-router-dom";
import A from "../views/A";

// A组件的二级路由
const aRoutes = [
  {
    path: "/a",
    component: () => <Navigate to="/a/a1" />,
  },
  {
    path: "/a/a1",
    name: "a-a1",
    component: lazy(() =>
      import(/* webpackChunkName: AChild */ "../views/a/A1")
    ),
    meta: {},
  },
  {
    path: "/a/a2",
    name: "a-a2",
    component: lazy(() =>
      import(/* webpackChunkName: AChild */ "../views/a/A2")
    ),
    meta: {},
  },
  {
    path: "/a/a3",
    name: "a-a3",
    component: lazy(() =>
      import(/* webpackChunkName: AChild */ "../views/a/A3")
    ),
    meta: {},
  },
];

// 一级路由
const routes = [
  {
    path: "/",
    component: () => <Navigate to="/" />,
  },
  // 注意：在component属性里面不能直接写成组件的形式，即<A />。
  // 如果写成<A />这样的形式，就意味着一旦程序运行就会直接调用A组件。
  { path: "/a", name: "a", component: A, meta: {}, children: aRoutes },
  {
    path: "/b",
    name: "b",
    component: lazy(() => import("../views/B")),
    meta: {},
  },
  {
    path: "/c/:id?/:name?",
    name: "c",
    component: lazy(() => import("../views/C")),
    meta: {},
  },
  {
    path: "*",
    component: () => {
      return (
        <Navigate
          to={{
            pathname: "/a",
            search: "id=100&name=hello",
          }}
        />
      );
    },
  },
];

export default routes;
