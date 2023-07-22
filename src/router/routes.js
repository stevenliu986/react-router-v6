import { Navigate } from "react-router-dom";
import A from "../views/A";
import B from "../views/B";
import C from "../views/C";

const routes = [
  {
    path: "/",
    component: () => <Navigate to="/" />,
  },
  // 注意：在component属性里面不能直接写成组件的形式，即<A />。
  // 如果写成<A />这样的形式，就意味着一旦程序运行就会直接调用A组件。
  { path: "/a", name: "a", component: A, meta: {} },
  { path: "/b", name: "b", component: B, meta: {} },
  { path: "/c", name: "c", component: C, meta: {} },
];

export default routes;
