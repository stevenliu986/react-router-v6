import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: () => <Navigate to="/" />,
  },
];

export default routes;
