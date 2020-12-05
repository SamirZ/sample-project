import { useReducer, useEffect } from "react";

function reducer(currentSrc: string, action: any) {
  if (action.type === "main image loaded") {
    return action.src;
  }
  if (!currentSrc) {
    return action.src;
  }
  return currentSrc;
}

interface Props {
  src: string;
  fallbackSrc: string;
}

const useProgressiveImage = ({ src, fallbackSrc }: Props) => {
  const [currentSrc, dispatch] = useReducer(reducer, null);
  useEffect(() => {
    const mainImage = new Image();
    const fallbackImage = new Image();

    mainImage.onload = () => {
      dispatch({ type: "main image loaded", src });
    };
    fallbackImage.onload = () => {
      dispatch({ type: "fallback image loaded", src: fallbackSrc });
    };

    mainImage.src = src;
    fallbackImage.src = fallbackSrc;
  }, [src, fallbackSrc]);

  return currentSrc;
};

export default useProgressiveImage;
