import styled from "styled-components";

import Layout from "components/layout/Layout";

import { DEVICES } from "styles/devices";

import usePresenter from "./MainScreen.presenter";
import useRouter from "./MainScreen.router";

const MainScreen = () => {
  const router = useRouter();
  const { users, onUserItemClick } = usePresenter(router);

  return (
    <Layout>
      <Container>
        <List>
          {users.map(user => (
            <ListItem
              key={user.id}
              onClick={() => {
                onUserItemClick(user.login);
              }}
            >
              {user.login}
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding-inline: 32px;

  @media ${DEVICES.mobile} {
    padding-inline: 16px;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ListItem = styled.div`
  width: 200px;
  padding: 16px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.surfaceVariantOutline};
  color: ${({ theme }) => theme.onBackground};
  cursor: pointer;
`;

export default MainScreen;
