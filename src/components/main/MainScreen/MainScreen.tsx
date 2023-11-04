import styled from "styled-components";

import Layout from "components/layout/Layout";
import FollowPannel from "components/user/FollowPannel";

import usePresenter from "./MainScreen.presenter";
import useRouter from "./MainScreen.router";

const MainScreen = () => {
  const router = useRouter();
  const { users, onUserItemClick } = usePresenter(router);

  return (
    <Layout>
      <Title>Recommended User</Title>
      <FollowPannel items={users} onUserCardClick={onUserItemClick} />
    </Layout>
  );
};

const Title = styled.h1``;

export default MainScreen;
