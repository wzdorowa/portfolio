"use client";

import { styled } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

import { Overview } from "@/src/components";
import { PORTFOLIO_ITEMS, OVERVIEW_DATA } from "@/src/data";
import { PortfolioCard as PortfolioCardComponent } from "./PortfolioPage/components";

export function PortfolioPage() {
  return (
    <Root>
      <Overview {...OVERVIEW_DATA.portfolio} />
      <PortfolioSection>
        <PortfolioGrid>
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCardComponent
              key={item.id}
              id={item.id}
              image={item.image}
              alt={item.alt}
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
