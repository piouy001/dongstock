import React from "react";

import styled from "styled-components";

interface Props {}

const UserProfile = (): React.ReactNode => {
  return (
    <Section>
      <Figure>
        <Image />
      </Figure>
    </Section>
  );
};

const Section = styled.div``;
const Figure = styled.figure``;
const Image = styled.img``;
const Name = styled.h1``;

export default UserProfile;
