import { FC } from "react";
import { styled } from "@mui/material";

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
  margin: "20px 0 0 0",

  "&:first-of-type": {
    marginTop: 0,
  },
});
