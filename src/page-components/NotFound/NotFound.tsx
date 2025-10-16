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
          <NavigationLink href="/"> главную страницу</NavigationLink>.
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
}));

const TextBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 80,

  "& span:nth-child(2)": {
    marginTop: 12,
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
