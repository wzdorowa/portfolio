"use client";

import { styled } from "@mui/material";
import React from "react";
import { Preview } from "./Preview";
import { previews } from "./constants";

export function PortfolioPage() {
  return (
    <Root>
      <NavigationBox>
        <Navigation>
          <Anchor href="./">Главная</Anchor>
        </Navigation>
      </NavigationBox>
      <Box>
        <Title>Примеры моих работ</Title>
        {previews.map((preview, index) => {
          return <Preview {...preview} key={index} />;
        })}
      </Box>
      <GradientSticky />
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingBottom: 120,
});

const GradientSticky = styled("div")({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: 70,
  background: "linear-gradient(360deg, #E1E1E1 0%, #fff0 100%)",
});

const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 32,
  margin: "0 auto",
  padding: "0 24px",

  "@media (min-width: 600px)": {
    gap: 32,
    paddingBottom: 20,
  },
  "@media (min-width: 760px)": {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 40,
    padding: 0,
    gap: 40,
  },
});

const NavigationBox = styled(Box)({
  margin: 0,
});

const Navigation = styled("div")({
  display: "flex",
  alignItems: "center",
  height: 70,
  gap: 30,

  "@media (min-width: 1150px)": {
    gap: 60,
  },
});

const Anchor = styled("a")({
  color: "#4E64D5",
  fontWeight: 500,
  textDecoration: "underline",
  transition: "color 200ms",

  "&:hover": {
    cursor: "pointer",
    color: "#4E64D570",
  },
});

const Title = styled("h1")({
  color: "#343D6F",
  fontSize: 40,
  fontWeight: "bold",
  margin: 0,
  padding: 0,

  "@media (min-width: 660px)": {
    fontSize: 56,
  },
});
