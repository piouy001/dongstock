import React, { useState } from "react";

import styled from "styled-components";

interface Props {}

const Tabs = (): React.ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = () => {};

  return (
    <Container>
      <Item>
        <Label>Tab</Label>
      </Item>
    </Container>
  );
};

const Container = styled.div``;
const Item = styled.div``;
const Label = styled.div``;

export default Tabs;
