"use client";

import Link from "next/link";
import { styled } from "@mui/material";
import { EXPERIENCE_PAGE_CONTENT } from "@/src/data";
import { Contacts } from "@/src/components/ui";

export const PageSubtitle = () => (
  <Container>
    <Subtitle>
      {EXPERIENCE_PAGE_CONTENT.subtitle.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <Contacts />
    </Subtitle>

    <ButtonsContainer>
      <DownloadButton
        href={EXPERIENCE_PAGE_CONTENT.resumeLink}
        download="Resume_Veronika_Zdorova.pdf"
      >
        <ButtonContent>
          <ButtonText>
            Скачать резюме <span>PDF, 49 KB</span>
          </ButtonText>
          <DownloadIcon />
        </ButtonContent>
      </DownloadButton>

      <PortfolioButton href={EXPERIENCE_PAGE_CONTENT.portfolioLink}>
        <ButtonContent>
          <ButtonText>Посмотреть портфолио</ButtonText>
          <ArrowIcon />
        </ButtonContent>
      </PortfolioButton>
    </ButtonsContainer>
  </Container>
);

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  marginBottom: 80,

  "@media (max-width: 768px)": {
    marginBottom: 64,
  },

  "@media (max-width: 480px)": {
    marginBottom: 48,
  },
});

const Subtitle = styled("div")({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#000",

  "@media (max-width: 540px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },

  "& .highlight": {
    color: "#4d7cef",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const ButtonsContainer = styled("div")({
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
});

const baseButtonStyles = {
  display: "inline-flex",
  padding: "8px 24px 6px",
  borderRadius: 40,
  textDecoration: "none",
  transition: "all 0.2s ease",
  border: "2px solid black",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  color: "inherit",

  "&:hover": {
    borderColor: "#4d7cef",
    color: "#4d7cef",
  },

  "&:active": {
    borderColor: "#e1e5e9",
    color: "#e1e5e9",
  },
};

const DownloadButton = styled("a")(baseButtonStyles);

const PortfolioButton = styled(Link)(baseButtonStyles);

const ButtonText = styled("span")({
  fontSize: "1rem",
  fontWeight: 500,

  "@media (max-width: 540px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },

  "& span": {
    color: "#b3b3b3",
  },
});

const ButtonContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  width: "100%",
});

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: 8 }}
  >
    <path
      d="M8 1V11M8 11L4 7M8 11L12 7M2 15H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: 8 }}
  >
    <path
      d="M1 8H15M15 8L9 2M15 8L9 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
