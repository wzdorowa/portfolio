"use client";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";

import { OVERVIEW_DATA } from "@/src/data";
import { Header, Title } from "../components";
import { Contacts } from "../components/Overview/Contacts";

export function MainPage() {
  return (
    <Root>
      <Overview>
        <Header />
        <Main>
          <Title variant="h1">{OVERVIEW_DATA.main.title}</Title>
          <Description>{OVERVIEW_DATA.main.text}</Description>
          <ContactsBox>
            <Contacts />
          </ContactsBox>
        </Main>
      </Overview>
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

  "@media (max-width: 1440px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const Overview = styled("div")({
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 100,
  padding: "42px 48px 48px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",

  "@media (max-width: 1440px)": {
    padding: "24px 128px 40px 48px",
    minWidth: "auto",
    maxWidth: "100%",
    height: "max-content",
  },

  "@media (max-width: 768px)": {
    padding: "24px 48px 40px 32px",
    gap: 64,
  },
  "@media (max-width: 480px)": {
    padding: "16px 32px 32px 16px",
    gap: 48,
  },
});

const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: 0, // Позволяет flex-элементу сжиматься меньше своего контента
});

const Description = styled("div")({
  maxWidth: 435,
  marginTop: 64,
  lineHeight: 1.7,

  "@media (max-width: 1440px)": {
    marginTop: 48,
    maxWidth: 785,
  },

  "@media (max-width: 1280px)": {
    maxWidth: 675,
  },

  "@media (max-width: 768px)": {
    marginTop: 36,
  },
  "@media (max-width: 480px)": {
    marginTop: 24,
  },
});

const ContactsBox = styled("div")({
  marginTop: 16,

  "@media (max-width: 480px)": {
    marginTop: 12,
  },
});

const ImageColumn = styled("div")({
  gridColumn: "2 / 3",
  position: "relative",
  minHeight: 600,

  "@media (max-width: 1440px)": {
    height: "100%",
    margin: "0 48px 64px 48px",
  },
  "@media (max-width: 768px)": {
    minHeight: 400,
    margin: "0 32px 32px 32px",
  },
  "@media (max-width: 480px)": {
    minHeight: 1,
    margin: "0 16px 16px 16px",
  },
});

const ResponsiveImage = styled(Image)({
  borderRadius: 0,
});
