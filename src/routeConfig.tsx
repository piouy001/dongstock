import MainScreen from "components/main/MainScreen/MainScreen";
import UserScreen from "components/user/UserScreen/UserScreen";

import { HOME_URL, USER_URL } from "constants/URLConstant";

const routes = [
  {
    path: HOME_URL,
    element: <MainScreen />,
  },
  {
    path: USER_URL,
    element: <UserScreen />,
  },
];

export default routes;
