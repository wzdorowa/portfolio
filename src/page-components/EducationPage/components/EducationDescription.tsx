"use client";

import Link from "next/link";
import { styled } from "@mui/material";
import { EDUCATION_RESOURCES, EDUCATION_TEXT } from "@/src/data";

export const EducationDescription = () => (
  <Description>
    {EDUCATION_TEXT.paragraphs.map((paragraph, index) => {
      if (index === 2) {
        return (
          <p key={index}>
            Весной 2025 года завершила обучение в «Школе дизайнеров» Бюро
            Горбунова, остановившись на{" "}
            <Link href={EDUCATION_RESOURCES.bureauLink} className="highlight">
              {EDUCATION_TEXT.linkText}
            </Link>
            {" (посмотреть можно в самом низу страницы)"}. До обучения смотрела
            на дизайн-макеты только со стороны разработчика.
          </p>
        );
      }
      return <p key={index}>{paragraph}</p>;
    })}
  </Description>
);

const Description = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  marginBottom: 32,

  "@media (max-width: 768px)": {
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
