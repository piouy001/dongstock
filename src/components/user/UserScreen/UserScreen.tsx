import LoadingWrapper from "components/common/LoadingWrapper";
import Tabs from "components/common/Tabs";
import Layout from "components/layout/Layout";

import usePresenter from "./UserScreen.presenter";
import useRouter from "./UserScreen.router";
import UserProfile from "../UserProfile";

const UserScreen = () => {
  const router = useRouter();
  const { user, isLoading } = usePresenter(router);

  console.log(user);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Layout>
        <UserProfile />
        <Tabs />
      </Layout>
    </LoadingWrapper>
  );
};

export default UserScreen;
