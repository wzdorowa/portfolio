"use client";

import Link from "next/link";
import { styled } from "@mui/material";
import { EXPERIENCE_PAGE_CONTENT } from "../../data";

export const PageSubtitle = () => (
  <Subtitle>
    {EXPERIENCE_PAGE_CONTENT.subtitle}{" "}
    <Link href={EXPERIENCE_PAGE_CONTENT.resumeLink} className="highlight">
      {EXPERIENCE_PAGE_CONTENT.resumeText}
    </Link>
    .{" "}
    <Link href={EXPERIENCE_PAGE_CONTENT.portfolioLink} className="highlight">
      {EXPERIENCE_PAGE_CONTENT.portfolioText}
    </Link>
    .
  </Subtitle>
);

const Subtitle = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  marginBottom: 80,

  "& .highlight": {
    color: "#4d7cef",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
