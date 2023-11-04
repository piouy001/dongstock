import React from "react";

import styled from "styled-components";

import Footer from "components/common/Footer";

import { CompanyIcon, ExploreIcon, LinkIcon, RegionIcon, TwitterIcon } from "assets/assetMap";
import { UserType } from "constants/user";
import { User } from "model/IUser";
import { typo_14_regular, typo_14_semibold, typo_16_medium, typo_16_regular, typo_24_bold } from "styles/Typo";
import { DEVICES } from "styles/devices";
import { toFormattedThousands } from "utils/number";

interface Props {
  user?: User;
}

const UserProfile = ({ user }: Props): React.ReactNode => {
  const metaList = [
    {
      key: "region",
      value: user?.location,
      label: user?.location,
      icon: <RegionIcon />,
    },
    {
      key: "company",
      value: user?.company,
      label: user?.company,
      icon: <CompanyIcon />,
    },
    {
      key: "blog",
      value: user?.blog,
      label: user?.blog,
      icon: <ExploreIcon />,
      link: user?.blog,
    },
    {
      key: "twitter",
      value: user?.twitterUsername,
      label: `@${user?.twitterUsername}`,
      icon: <TwitterIcon />,
      link: `https://twitter.com/${user?.twitterUsername}`,
    },
  ];

  const statList = [
    {
      key: "Repos",
      value: toFormattedThousands(user?.publicRepos ?? 0),
    },
    {
      key: "Followers",
      value: toFormattedThousands(user?.followers ?? 0),
    },
    {
      key: "Following",
      value: toFormattedThousands(user?.following ?? 0),
    },
  ];
  return (
    <Profile>
      {user?.avatarUrl && (
        <Avatar $isUser={user?.type === UserType.User}>
          <Image src={user.avatarUrl} alt="user-avatar" />
        </Avatar>
      )}
      {user?.name && <Title>{user.name}</Title>}
      {user?.login && <Name>{user.login}</Name>}
      {user?.bio && <Job>{user.bio}</Job>}
      {user?.htmlUrl && (
        <Link href={user.htmlUrl} target="_blank">
          <LinkIcon />
          <LinkLabel>See on Github</LinkLabel>
        </Link>
      )}
      <MetaList>
        {metaList.map(item => {
          return item.value ? (
            <MetaItem key={item.key}>
              {item.icon}
              <MetaLabel href={item.link} target="_blank" $isLink={!!item.link}>
                {item.label}
              </MetaLabel>
            </MetaItem>
          ) : (
            ""
          );
        })}
      </MetaList>
      <StatList>
        {statList.map(item => (
          <Stat key={item.key}>
            <StatBody>{item.value}</StatBody>
            {item.key}
          </Stat>
        ))}
      </StatList>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Profile>
  );
};

const Profile = styled.div`
  margin-block-end: 0;
  position: sticky;
  top: 80px;

  @media ${DEVICES.mobile} {
    position: initial;
  }
`;
const Avatar = styled.figure<{ $isUser: boolean }>`
  overflow: hidden;
  width: 280px;
  height: 280px;
  background-color: ${({ theme }) => theme.alpha50};
  border-radius: ${({ $isUser }) => ($isUser ? "280px" : "24px")};

  @media ${DEVICES.tablet} {
    width: 200px;
    height: 200px;
  }
  @media ${DEVICES.mobile} {
    width: 160px;
    height: 160px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  padding-block: 16px 4px;
  ${typo_24_bold};
`;
const Name = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.primary};
  ${typo_14_regular};
`;
const Job = styled.p`
  margin-block: 12px;
  ${typo_14_semibold};
`;
const Link = styled.a`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  background: ${({ theme }) => theme.primarySurface};
  border: 1px solid ${({ theme }) => theme.primarySurfaceOutline};
  border-radius: 8px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);
  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.primarySurfaceHover};
    border-color: ${({ theme }) => theme.primarySurfaceOutlineHover};
  }
`;
const LinkLabel = styled.span`
  ${typo_14_semibold};
`;
const MetaList = styled.div`
  margin-block: 24px;
`;
const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-block: 8px;
  gap: 8px;
  ${typo_14_regular};

  & svg {
    width: 24px;
    height: 24px;
  }
`;
const MetaLabel = styled.a<{ $isLink: boolean }>`
  color: ${({ theme }) => theme.onBackground};
  transition: color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);

  &:hover {
    color: ${({ $isLink, theme }) => $isLink && theme.primary};
  }
`;
const StatList = styled.div``;
const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-block: 8px;
  color: ${({ theme }) => theme.onSurfaceVariant};
  ${typo_14_semibold};
`;
const StatBody = styled.div`
  color: ${({ theme }) => theme.onBackground};
  ${typo_16_medium};
`;
const FooterWrapper = styled.div`
  @media ${DEVICES.mobile} {
    display: none;
  }
`;

export default UserProfile;
