import styled from "styled-components";

import Layout from "components/layout/Layout";
import FollowPannel from "components/user/FollowPannel";

import { typo_24_semibold } from "styles/Typo";

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

const Title = styled.h1`
  padding-block: 12px;
  ${typo_24_semibold};
`;

export default MainScreen;
