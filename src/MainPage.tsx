import { styled } from "@mui/material";
import React from "react";

import educationIcon from "../public/icons/education.svg";
import experienceIcon from "../public/icons/experience.svg";
import hobbyIcon from "../public/icons/hobby.svg";

import { NextSvgIcon } from "./NextSvgIcon";
import { InfoSection } from "./InfoSection";
import { education, experience, hobby } from "./constants";
import { AboutMe } from "./AboutMe";

export function MainPage() {
  return (
    <>
      <Root>
        <AboutMe />
        <InfoBox>
          <InfoSection
            title="Образование"
            icon={
              <NextSvgIcon
                image={educationIcon}
                fontSize="inherit"
                alt="email"
              />
            }
            sectionId="education"
            tableData={education}
          />
          <InfoSection
            title="Опыт работы"
            icon={
              <NextSvgIcon
                image={experienceIcon}
                fontSize="inherit"
                alt="email"
              />
            }
            sectionId="experience"
            tableData={experience}
          />
          <InfoSection
            title="Увлечения"
            icon={
              <NextSvgIcon image={hobbyIcon} fontSize="inherit" alt="email" />
            }
            sectionId="hobby"
            tableData={hobby}
          />
        </InfoBox>
        <Footer>
          <span>Designed by Zdorova Veronika</span>
        </Footer>
      </Root>
      <GradientSticky />
    </>
  );
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1280,
  margin: "0 auto",
  padding: "16px 24px 0",

  "@media (min-width: 600px)": {
    padding: "50px 32px 0",
  },
  "@media (min-width: 1024px)": {
    padding: "70px 40px 0",
  },
});

const GradientSticky = styled("div")({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: 70,
  background: "linear-gradient(360deg, white 0%, #fff0 100%)",
});

const InfoBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 50,
  marginTop: 120,

  "@media (min-width: 600px)": {
    marginTop: 160,
  },
  "@media (min-width: 1024px)": {
    marginTop: 200,
  },
});

const Footer = styled("div")({
  display: "flex",
  justifyContent: "end",
  alignItems: "end",
  height: 120,
  padding: "20px 0",
  zIndex: 1,

  "@media (min-width: 600px)": {
    marginTop: 160,
  },
  "@media (min-width: 1024px)": {
    marginTop: 200,
  },
});
