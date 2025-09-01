"use client";

import { styled } from "@mui/material";
import { ExperienceItem } from "./ExperienceItem";
import { EXPERIENCE_DATA } from "../../data";

export const ExperienceList = () => (
  <List>
    {EXPERIENCE_DATA.map((experience) => (
      <ExperienceItem key={experience.id} experience={experience} />
    ))}
  </List>
);

const List = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 80,
});
