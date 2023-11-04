import React from "react";

import styled from "styled-components";

import ErrorContent from "components/common/ErrorContent";

import { CodeIcon, ForkIcon, StarIcon } from "assets/assetMap";
import { Repository } from "model/IRepository";
import { typo_12_semibold, typo_14_regular, typo_16_regular, typo_18_bold } from "styles/Typo";
import { DEVICES } from "styles/devices";

import { Pannel } from "./UserTab";

interface Props {
  items: Repository[];
}

const RepositoryPannel = ({ items }: Props): React.ReactNode => {
  if (!items.length) return <ErrorContent />;

  return (
    <Pannel>
      {items.map(item => (
        <Card key={item.name}>
          <CardBody>
            <CardTitleWrapper>
              <CardTitle>
                <CardLink href={item.htmlUrl} target="_blank">
                  {item.name}
                </CardLink>
              </CardTitle>
              <CardType>Public</CardType>
            </CardTitleWrapper>
            <CardText>{item.description}</CardText>
          </CardBody>
          <CardFooter>
            {item.language && (
              <FooterItem>
                <CodeIcon />
                <FooterLabel>{item.language}</FooterLabel>
              </FooterItem>
            )}
            <FooterItem>
              <StarIcon />
              <FooterLabel>{item.stargazersCount}</FooterLabel>
            </FooterItem>
            <FooterItem>
              <ForkIcon />
              <FooterLabel>{item.forksCount}</FooterLabel>
            </FooterItem>
          </CardFooter>
        </Card>
      ))}
    </Pannel>
  );
};

const Card = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  background: ${({ theme }) => theme.surface};
  border-radius: 12px;

  @media ${DEVICES.desktop} {
    max-width: calc(50% - 8px);
  }
`;
const CardBody = styled.div`
  padding: 24px;
  flex-grow: 1;

  @media ${DEVICES.mobile} {
    padding: 16px;
  }
`;
const CardTitleWrapper = styled.div`
  position: relative;
`;
const CardTitle = styled.div`
  width: 100%;
  padding-right: 76px;
`;
const CardLink = styled.a`
  ${typo_18_bold};
  color: ${({ theme }) => theme.onBackground};
  transition: color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const CardType = styled.div`
  position: absolute;
  right: 0;
  top: 1px;
  max-width: max-content;
  height: 24px;
  padding-inline: 12px;
  padding-top: 2px;
  background: ${({ theme }) => theme.surfaceVariant};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.surfaceVariantOutline};
  color: ${({ theme }) => theme.alpha60};
  ${typo_12_semibold};
`;
const CardText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  -webkit-line-clamp: 2;
  margin-block-start: 8px;
  word-break: break-all;
  color: ${({ theme }) => theme.onSurfaceVariant};
  ${typo_16_regular};

  @media ${DEVICES.mobile} {
    ${typo_14_regular};
  }
`;
const CardFooter = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  background: ${({ theme }) => theme.surfaceVariant};
  & svg {
    width: 24px;
    height: 24px;
  }

  @media ${DEVICES.mobile} {
    padding: 16px;
  }
`;
const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.onSurface};
`;
const FooterLabel = styled.div`
  ${typo_14_regular};
`;

export default RepositoryPannel;
