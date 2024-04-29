import { styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.png";
import { SocialLinks } from "./SocialLinks";

export function AboutMe() {
  return (
    <Box>
      <AboutMeInfo>
        <Navigation>
          <Anchor href="#education">Образование</Anchor>
          <Anchor href="#experience">Опыт работы</Anchor>
          <Anchor href="#hobby">Увлечения</Anchor>
        </Navigation>
        <Title>
          <span>Здорова</span>
          <span>Вероника</span>
          <span>Frontend developer</span>
        </Title>
        <DesktopSocialLinks>
          <SocialLinks />
        </DesktopSocialLinks>
      </AboutMeInfo>
      <Portrait>
        <Image
          src={portrait.src}
          width={533}
          height={800}
          layout="responsive"
          alt="Portrait Zdorova Veronika"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
      </Portrait>
      <MobileSocialLinks>
        <SocialLinks />
      </MobileSocialLinks>
    </Box>
  );
}

const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 40,

  "@media (min-width: 1024px)": {
    flexDirection: "row",
    height: "calc(100vh - 70px - 140px)",
  },
});

const AboutMeInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 40,
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

const Title = styled("span")({
  maxWidth: 650,
  display: "inline-flex",
  flexWrap: "wrap",
  columnGap: 24,
  color: "#343D6F",
  fontSize: 56,
  fontWeight: "bold",
  margin: 0,
  padding: 0,

  "& span:last-child": {
    color: "#5B5B5C",
    fontSize: 32,
    fontWeight: "normal",
  },

  "@media (min-width: 760px)": {
    fontSize: 64,

    "& span:last-child": {
      fontSize: 48,
    },
  },

  "@media (min-width: 1024px)": {
    flexDirection: "column",
    marginBottom: 116,
  },
});

const DesktopSocialLinks = styled("div")({
  display: "none",

  "@media (min-width: 1024px)": {
    display: "block",
  },
});

const MobileSocialLinks = styled("div")({
  "@media (min-width: 1024px)": {
    display: "none",
  },
});

const Portrait = styled("div")({
  border: "solid #5B5B5C",
  overflow: "hidden",
  maxWidth: 533,
  width: "100%",
});
