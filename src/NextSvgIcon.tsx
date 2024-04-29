import React from "react";
import NextImage, { StaticImageData } from "next/image";

import { styled } from "@mui/material";

type FontSize = "inherit" | "medium" | "small" | "large";

export type NextSvgIconProps = {
  image: StaticImageData;
  alt?: string;
  fontSize?: FontSize;
};

export function NextSvgIcon({
  image,
  alt,
  fontSize = "medium",
}: NextSvgIconProps) {
  return (
    <Root width={image.width} height={image.height} fontSize={fontSize}>
      <NextImage
        src={image}
        style={{ objectFit: "contain", objectPosition: "center center" }}
        fill
        alt={alt || ""}
      />
    </Root>
  );
}

const Root = styled("div", {
  shouldForwardProp: (prop) =>
    !["width", "height", "fontSize"].includes(prop as string),
})<{
  width: number;
  height: number;
  fontSize: FontSize;
}>(({ width, height, fontSize }) => ({
  position: "relative",
  width: `${Math.round((width / height) * 100) / 100}em`,
  height: "1em",
  fontSize:
    (fontSize === "inherit" && "inherit") ||
    (fontSize === "small" && 16) ||
    (fontSize === "large" && 24) ||
    20,
}));
