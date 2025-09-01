"use client";

import { styled } from "@mui/material";
import { type ExperienceData } from "../../data";

interface ExperienceHeaderProps {
  period: ExperienceData["period"];
  position: ExperienceData["position"];
}

export const ExperienceHeader = ({
  period,
  position,
}: ExperienceHeaderProps) => (
  <TitleSection>
    <Period>{period}</Period>
    <Position>{position}</Position>
  </TitleSection>
);

const TitleSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 563,
});

const Period = styled("div")({
  fontSize: 20,
  lineHeight: 1.18,
  color: "#000",
});

const Position = styled("div")({
  fontSize: 48,
  lineHeight: 1.18,
  color: "#000",
  fontWeight: 400,
});
