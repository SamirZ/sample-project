import React from "react";
import { render, screen } from "@testing-library/react";
import { BASE_EMBED_URL, Video } from "./Video";

describe("Video component", () => {
  it("renders nothing if id is not provided", () => {
    render(
        <Video id={''}/>
    );
    const element = screen.queryByTestId('video-player');
    expect(element).not.toBeInTheDocument();
  });

  it("renders component if id is provided", () => {
    const id = 'test';
    const { getByTestId } = render(
        <Video id={id}/>
    );
    const element = getByTestId('video-player');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('src', `${BASE_EMBED_URL}${id}`)
  });
});
