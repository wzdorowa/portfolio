import { Link as MuiLink, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.png";
import email from "../public/icons/email.svg";
import telegram from "../public/icons/telegram.svg";
import vk from "../public/icons/vk.svg";

import { NextSvgIcon } from "./NextSvgIcon";

export function MainPage() {
  return (
    <Root>
      <Box>
        <AboutMe>
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
          <SocialLinks>
            <LinkBox>
              <IconBox>
                <NextSvgIcon image={email} fontSize="inherit" alt="email" />
              </IconBox>
              <Link href="mailto:w.zdorowa@gmail.com">w.zdorowa@gmail.com</Link>
            </LinkBox>
            <LinkBox>
              <IconBox>
                <NextSvgIcon
                  image={telegram}
                  fontSize="inherit"
                  alt="telegram"
                />
              </IconBox>
              <Text style={{ fontWeight: "normal" }}>@zdorova_veronika</Text>
            </LinkBox>
            <LinkBox>
              <IconBox>
                <NextSvgIcon image={vk} fontSize="inherit" alt="vk" />
              </IconBox>
              <Link href="https://vk.com/serdcenika">serdcenika</Link>
            </LinkBox>
          </SocialLinks>
        </AboutMe>
        <Portrait>
          <Image
            src={portrait.src}
            width={533}
            height={800}
            alt="Portrait Zdorova Veronika"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </Portrait>
      </Box>
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1200,
  margin: "0 auto",
  paddingTop: 70,
});

const Box = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "calc(100vh - 70px - 140px)",
});

const AboutMe = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Navigation = styled("div")({
  height: 70,
  display: "flex",
  gap: 60,
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
  display: "inline-flex",
  flexDirection: "column",
  color: "#343D6F",
  fontSize: 64,
  fontWeight: "bold",
  margin: 0,
  marginBottom: 116,
  padding: 0,

  "& span:last-child": {
    color: "#5B5B5C",
    fontSize: 48,
    fontWeight: "normal",
  },
});

const SocialLinks = styled("div")({
  display: "flex",
  gap: 45,
});

const Link = styled(MuiLink)({
  textDecoration: "none",
  transition: "color 200ms",

  "&:hover": {
    cursor: "pointer",
    color: "#4E64D570",
  },
});

const Text = styled("span")({
  color: "#4E64D5",
  fontWeight: "bold",
});

const LinkBox = styled("span")({
  display: "inline-flex",
  gap: 8,
});

const IconBox = styled("span")({
  fontSize: 20,
});

const Portrait = styled("div")({
  border: "solid #5B5B5C",
  overflow: "hidden",
  position: "relative",
});
