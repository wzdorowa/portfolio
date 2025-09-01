import { FC } from "react";
import { styled } from "@mui/material";
import { PROJECT_PAGE_CONSTANTS } from "../constants";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ProjectSection: FC<ProjectSectionProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </>
  );
};

const SectionTitle = styled("p")({
  fontWeight: 500,
  margin: PROJECT_PAGE_CONSTANTS.SECTION.TITLE_MARGIN,

  "&:first-of-type": {
    marginTop: 0,
  },
});
