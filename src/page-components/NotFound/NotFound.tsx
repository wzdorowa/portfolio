"use client";
import React from "react";
import Link from "next/link";

import { styled } from "@mui/material";
import { EmptyImage } from "./components";

export function NotFoundPage() {
  return (
    <Root>
      <EmptyImage />

      <TextBox>
        <span>Такой страницы нет.</span>
        <span>
          Проверьте URL или перейдите на{" "}
          <NavigationLink href="/"> главную&nbsp;страницу</NavigationLink>.
        </span>
      </TextBox>
    </Root>
  );
}

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 54,
  flexGrow: 1,
  padding: "24px 128px 160px 48px",

  "@media (max-width: 1300px)": {
    padding: "24px 128px 120px 48px",
  },
  "@media (max-width: 768px)": {
    padding: "24px 48px 100px 32px",
  },
  "@media (max-width: 480px)": {
    padding: "16px 32px 64px 16px",
  },
}));

const TextBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 80,

  "& span:nth-child(2)": {
    marginTop: 12,
    textAlign: "center",
  },
});

const NavigationLink = styled(Link)({
  textDecoration: "none",
  color: "#4e64d5",
  transition: "textDecoration 0.2s ease",

  "&:hover": {
    textDecoration: "underline",
  },
});
