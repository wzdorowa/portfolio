"use client";

import { styled } from "@mui/material";
import { type ExperienceData } from "../../data";

interface ExperienceStackProps {
  stack: ExperienceData["stack"];
}

export const ExperienceStack = ({ stack }: ExperienceStackProps) => (
  <Stack>{stack}</Stack>
);

const Stack = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
});
