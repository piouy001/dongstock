import React from "react";

import styled from "styled-components";

import { LinkIcon } from "assets/assetMap";
import { BaseUser } from "model/IUser";
import { typo_16_medium } from "styles/Typo";
import { DEVICES } from "styles/devices";

import { Pannel } from "./UserTab";

interface Props {
  items: BaseUser[];
  onUserCardClick: (userName: string) => void;
}

const FollowPannel = ({ items, onUserCardClick }: Props): React.ReactNode => {
  return (
    <Pannel>
      {items.map(item => (
        <Card key={item.id}>
          <LeftSide>
            <Avatar>
              <Image src={item.avatarUrl} alt="user-avatar" />
            </Avatar>
            <Name>{item.login}</Name>
          </LeftSide>
          <Link
            onClick={() => {
              onUserCardClick(item.login);
            }}
          >
            <LinkIcon />
          </Link>
        </Card>
      ))}
    </Pannel>
  );
};

const Card = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  padding: 24px;
  gap: 24px;
  background: ${({ theme }) => theme.surface};
  border-radius: 12px;

  @media ${DEVICES.desktop} {
    max-width: calc(50% - 8px);
  }
  @media ${DEVICES.mobile} {
    padding: 16px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Avatar = styled.figure`
  overflow: hidden;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 56px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Name = styled.div`
  ${typo_16_medium};
`;
const Link = styled.button`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.surfaceVariant};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.surfaceVariantOutline};
  color: ${({ theme }) => theme.onBackground};

  & svg {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }

  &:hover {
    background: ${({ theme }) => theme.surfaceVariantHover};
    border-color: ${({ theme }) => theme.surfaceVariantOutlineHover};
  }
`;

export default FollowPannel;
