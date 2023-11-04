import React, { useState } from "react";

import styled from "styled-components";

import { UserTabType } from "constants/user";
import { Repository } from "model/IRepository";
import { BaseUser } from "model/IUser";
import { typo_14_regular, typo_14_semibold } from "styles/Typo";

import FollowPannel from "./FollowPannel";
import RepositoryPannel from "./RepositoryPannel";

const TAB_LIST = [
  {
    label: "Repositories",
    value: UserTabType.Repositories,
  },
  {
    label: "Forked",
    value: UserTabType.Forked,
  },
  {
    label: "Followers",
    value: UserTabType.Followers,
  },
  {
    label: "Following",
    value: UserTabType.Following,
  },
];

interface Props {
  repositories: Repository[];
  followers: BaseUser[];
  following: BaseUser[];
  onUserCardClick: (userName: string) => void;
}

const UserTab = ({ repositories, followers, following, onUserCardClick }: Props): React.ReactNode => {
  const [tabValue, setTabValue] = useState(UserTabType.Repositories);

  const forkedRepositories = repositories.filter(repository => repository.fork);
  const isRepositoriesTab = tabValue === UserTabType.Repositories || tabValue === UserTabType.Forked;
  const pannelDataByTab: Record<UserTabType, Repository[] | BaseUser[]> = {
    [UserTabType.Repositories]: repositories,
    [UserTabType.Forked]: forkedRepositories,
    [UserTabType.Followers]: followers,
    [UserTabType.Following]: following,
  };
  const pannelData = pannelDataByTab[tabValue];

  const handleTabClick = (value: UserTabType) => {
    setTabValue(value);
  };

  return (
    <Container>
      <TabList>
        {TAB_LIST.map(item => (
          <Tab
            key={item.value}
            $isActive={item.value === tabValue}
            onClick={() => {
              handleTabClick(item.value);
            }}
          >
            {item.label}
          </Tab>
        ))}
      </TabList>
      {isRepositoriesTab && <RepositoryPannel items={pannelData as Repository[]} />}
      {!isRepositoriesTab && <FollowPannel items={pannelData as BaseUser[]} onUserCardClick={onUserCardClick} />}
    </Container>
  );
};

const Container = styled.div``;
const TabList = styled.div`
  display: flex;
  padding-block-end: 4px;
  margin-inline: -16px;
  padding-inline: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.alpha5};
`;
const Tab = styled.button<{ $isActive: boolean }>`
  position: relative;
  flex: 1;
  height: 48px;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  color: ${({ theme }) => theme.onBackground};
  transition: background-color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.8)};
  ${({ $isActive }) => ($isActive ? typo_14_semibold : typo_14_regular)};

  &:hover {
    background: ${({ theme }) => theme.alpha5};
  }
  &::after {
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }
`;
export const Pannel = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export default UserTab;
