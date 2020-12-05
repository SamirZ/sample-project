import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

export const BASE_EMBED_URL = "https://www.youtube.com/embed/";

interface Props {
  id: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40px, -40px);
`;

export function Video({ id }: Props) {
  const [loading, setLoading] = useState(true);
  if (!id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${id}`;
  return (
    <Wrapper>
      <LoaderWrapper>{loading && <Loader light ring />}</LoaderWrapper>
      <VideoPlayer
        onLoad={e => {
          setLoading(false);
        }}
        data-testid="video-player"
        className="video-player"
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </Wrapper>
  );
}
