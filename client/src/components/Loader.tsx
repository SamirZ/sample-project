import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

const grow = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Blocks = styled.div<Props>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${props => (props.light ? "white" : "#333")};
    animation: ${grow} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;

const Ring = styled.div<Props>`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: ${props => (props.light ? "white" : "#333")}
      ${props => (props.light ? "white" : "#333")}
      ${props => (props.light ? "white" : "#333")} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  light?: boolean;
  ring?: boolean;
}

const Loader = ({ light, ring }: Props): ReactElement => {
  return (
    <Wrapper>
      {ring ? (
        <Ring>
          {[ ...Array(4).keys()].map((i)=><div key={i}/>)}
        </Ring>
      ) : (
        <Blocks light={light}>
          {[ ...Array(3).keys()].map((i)=><div key={i}/>)}
        </Blocks>
      )}
    </Wrapper>
  );
};

export default Loader;
