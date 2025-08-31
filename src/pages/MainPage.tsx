"use client";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";

import { Overview } from "../components";
import { OVERVIEW_DATA } from "../data";

export function MainPage() {
  return (
    <Root>
      <Overview {...OVERVIEW_DATA.main} />
      <ImageColumn>
        <ResponsiveImage
          src="/images/photo.jpg"
          alt="Фотография Вероники Здоровой"
          fill
          sizes="(max-width: 768px) 100vw, 100%"
          priority
          style={{ objectFit: "cover" }}
        />
      </ImageColumn>
    </Root>
  );
}

const Root = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  height: "100vh",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const ImageColumn = styled("div")({
  gridColumn: "2 / 3",
  position: "relative",
  minHeight: 600,

  "@media (max-width: 768px)": {
    minHeight: 400,
  },
});

const ResponsiveImage = styled(Image)({
  borderRadius: 0,
});
