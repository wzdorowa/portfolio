"use client";

import { styled } from "@mui/material";
import { EDUCATION_TEXT } from "@/src/data";

export const EducationDescription = () => (
  <Description>
    {EDUCATION_TEXT.paragraphs.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    })}
  </Description>
);

const Description = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  marginBottom: 32,

  "@media (max-width: 540px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
    marginBottom: 24,
  },

  "& p": {
    marginBottom: 12,
  },

  "& .highlight": {
    color: "#4d7cef",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
