import React, { ReactElement, memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 5rem;
  }
`;

const NoResults = memo(
  (): ReactElement => {
    return (
      <Wrapper>
        <p>No results!</p>
      </Wrapper>
    );
  }
);

export default NoResults;
