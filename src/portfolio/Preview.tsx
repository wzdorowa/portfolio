import { styled } from "@mui/material";
import React from "react";
import Image from "next/image";

type PreviewProps = {
  title: string;
  imgScr: string;
  descriptionTitle: string;
  descriptionList: string[];
  descriptionLinks: {
    href: string;
    text: string;
  }[];
  key: number;
};

export function Preview(props: PreviewProps) {
  const { title, imgScr, descriptionTitle, descriptionList, descriptionLinks } =
    props;
  return (
    <PreviewSection>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewContent>
        <PreviewImg>
          <Image
            src={imgScr}
            width={533}
            height={580}
            alt={`Preview ${title}`}
            style={{
              objectFit: "cover",
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: 5,
            }}
          />
        </PreviewImg>
        <PreviewDescription>
          <h3>{descriptionTitle}</h3>
          <List>
            {descriptionList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
          <>
            {descriptionLinks.map((link, index) => (
              <Anchor href={link.href} key={index}>
                {link.text}
              </Anchor>
            ))}
          </>
        </PreviewDescription>
      </PreviewContent>
    </PreviewSection>
  );
}

const PreviewSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const PreviewTitle = styled("h2")({
  fontSize: 30,
  lineHeight: 1,
  color: "#5B5B5C",
  fontWeight: "normal",
  margin: 0,
  padding: 0,

  "@media (min-width: 660px)": {
    fontSize: 40,
  },
  "@media (min-width: 850px)": {
    fontSize: 48,
  },
});

const PreviewContent = styled("div")({
  display: "flex",
  flexDirection: "column",

  "@media (min-width: 850px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
});

const PreviewImg = styled("div")({
  width: "100%",
  height: "max-content",
  position: "relative",

  "&::after": {
    position: "absolute",
    content: '""',
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 70,
    background: "linear-gradient(360deg, #E1E1E1 0%, #fff0 100%)",
  },
});

const PreviewDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingLeft: 20,

  "@media (min-width: 600px)": {
    paddingLeft: 40,
  },
});

const List = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  maxWidth: 445,
  padding: 0,
  paddingLeft: 16,
  margin: 0,
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
