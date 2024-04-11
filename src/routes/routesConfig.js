import Home from "pages/Home";
import NotFound from "pages/NotFound";

const routesConfig = [
  {
    path: "/",
    component: Home,
    private: false,
  },
  {
    path: "*",
    component: NotFound,
    private: false,
  },
];

export default routesConfig;
