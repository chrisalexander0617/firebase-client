import Home from "../screens/Home";
import Login from "../screens/Login";
import Page from "../screens/Page"

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/page",
    component: Page,
    name: "The Page",
    protected: true,
  },
];

export default routes;
