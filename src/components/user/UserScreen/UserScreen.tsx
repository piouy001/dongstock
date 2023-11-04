import styled from "styled-components";

import LoadingWrapper from "components/common/LoadingWrapper";
import Layout from "components/layout/Layout";

import { DEVICES } from "styles/devices";

import usePresenter from "./UserScreen.presenter";
import useRouter from "./UserScreen.router";
import UserProfile from "../UserProfile";
import UserTab from "../UserTab";

const UserScreen = () => {
  const router = useRouter();
  const { isLoading, user, repositories, followers, following, onUserCardClick } = usePresenter(router);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Layout>
        <Container>
          <UserProfile user={user} />
          <UserTab
            repositories={repositories}
            followers={followers}
            following={following}
            onUserCardClick={onUserCardClick}
          />
        </Container>
      </Layout>
    </LoadingWrapper>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: flex-start;
  gap: 36px;
  height: 100%;
  padding-top: 16px;

  @media ${DEVICES.tablet} {
    grid-template-columns: 240px 1fr;
  }
  @media ${DEVICES.mobile} {
    display: block;
    padding-top: 0;
    margin-block-end: 24px;
  }
`;

export default UserScreen;
