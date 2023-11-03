import Tabs from "components/common/Tabs";
import Layout from "components/layout/Layout";

import usePresenter from "./UserScreen.presenter";
import useRouter from "./UserScreen.router";
import UserProfile from "../UserProfile";

const UserScreen = () => {
  const router = useRouter();
  const { user } = usePresenter(router);

  console.log(user);

  return (
    <Layout>
      <UserProfile />
      <Tabs />
    </Layout>
  );
};

export default UserScreen;
