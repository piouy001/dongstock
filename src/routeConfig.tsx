import ErrorScreen from "components/common/ErrorScreen";
import MainScreen from "components/main/MainScreen/MainScreen";
import UserScreen from "components/user/UserScreen/UserScreen";

import { ERROR_URL, HOME_URL } from "constants/URLConstant";

const routes = [
  {
    path: HOME_URL,
    element: <MainScreen />,
  },
  {
    path: "/:userName",
    element: <UserScreen />,
  },
  {
    path: ERROR_URL,
    element: <ErrorScreen />,
  },
];

export default routes;
