import styled from "styled-components";

export const Heading = styled.h1`
  line-height: 5rem;
  text-align: center;
  padding: 1rem 0 0;
  color: orange;
  background-color: #333;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  span {
    color: lightgray;
  }
`;

export const Genre = styled.h3`
  padding: 0.5rem 0 1rem;
  background-color: #333;
  text-align: center;
  span {
    color: gray;
  }
  span:not(:last-of-type) {
    ::after {
      content: " | ";
    }
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Tagline = styled.p`
  padding: 0 0 1.5rem;
  background-color: #333;
  text-align: center;
  color: lightgray;
`;

export const Stat = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: max-content;
  strong {
    color: lightsteelblue;
    margin-bottom: 0.5rem;
  }
  span {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    i {
      color: orange;
      width: 24px;
      margin-right: 0.25rem;
    }
  }
`;

export const LoaderContainer = styled.div`
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  background-color: #444;
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  color: white;
  background-color: #444;
  border-top: 1px solid orange;
  border-bottom: 1px solid orange;
  padding: 1rem;
  transition: all 1s;
  p {
    text-align: justify;
    padding: 2rem;
    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;

export const VideoBox = styled.div`
  min-height: max-content;
  flex-grow: 1;
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #444;
  min-height: max-content;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
`;

export const OverView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0;
  box-shadow: 0 0 8px 0 black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 4px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  position: relative;

  span {
    border-radius: 4px;
    background-color: orange;
    font-size: 2rem;
    padding: 1rem;
    border: none;
    z-index: 2;
  }

  :hover {
    i {
      transform: translateX(-30px);
      left: -10px
    }
  }

  i {
    font-size: 40px;
    z-index: 1;
    position: absolute;
    transition: all 0.25s ease-in-out;
  }
`;

interface Props {
  isLoading: boolean;
}

export const GridPageWrapper = styled.div<Props>`
  display: ${props => (props.isLoading ? "none" : "grid")};
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  overflow-x: auto;
`;
