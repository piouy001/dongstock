import styled from "styled-components";

import Footer from "components/common/Footer";
import LoadingWrapper from "components/common/LoadingWrapper";
import Tabs from "components/common/Tabs";
import Layout from "components/layout/Layout";

import { typo_14_regular } from "styles/Typo";
import { DEVICES } from "styles/devices";

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
        <Container>
          <UserProfile user={user} />
          <Contents>
            <Tabs />
          </Contents>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
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

  @media ${DEVICES.tablet} {
    grid-template-columns: 240px 1fr;
  }
  @media ${DEVICES.mobile} {
    display: block;
    margin-block-end: 24px;
  }
`;
const Contents = styled.div``;
const FooterWrapper = styled.div`
  display: none;
  @media ${DEVICES.mobile} {
    display: block;
  }
`;

export default UserScreen;
