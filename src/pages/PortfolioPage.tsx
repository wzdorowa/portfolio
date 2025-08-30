"use client";

import { styled } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

import { Overview } from "../components";
import { PORTFOLIO_ITEMS } from "../data";

export function PortfolioPage() {
  return (
    <Root>
      <Overview type="portfolio" />
      <PortfolioSection>
        <PortfolioGrid>
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard
              key={item.id}
              backgroundImage={item.image}
              title={item.alt}
            />
          ))}
        </PortfolioGrid>
      </PortfolioSection>
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#ffffff",
});

const PortfolioSection = styled(Box)({
  flex: 2,
  padding: "50px 64px 76px 0",
  height: "100vh",
  overflowY: "scroll",

  "@media (max-width: 1440px)": {
    gridTemplateColumns: "1fr",
    gap: 32,
    padding: "50px 64px 76px 64px",
  },
});

const PortfolioGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 16,
  width: "100%",

  "@media (max-width: 1920px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 1440px)": {
    gridTemplateColumns: "1fr",
    gap: 32,
  },
});

const PortfolioCard = styled("div")<{ backgroundImage: string }>(
  ({ backgroundImage }) => ({
    position: "relative",
    height: 315,
    overflow: "hidden",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% auto",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  })
);
