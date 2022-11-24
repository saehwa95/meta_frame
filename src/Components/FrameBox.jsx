import React from "react";
import styled from "styled-components";

const FrameBox = () => {
  return (
    <>
      <FrameContainer>
        <Frame />
      </FrameContainer>
    </>
  );
};

export default FrameBox;

const FrameContainer = styled.div`
`

const Frame = styled.div`
  width: 1651px;
  height: 100vh;
  background-color: yellow;

`;
