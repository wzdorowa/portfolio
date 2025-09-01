import { FC } from "react";
import { styled } from "@mui/material";
import { PROJECT_PAGE_CONSTANTS } from "./constants";

interface ProjectTextProps {
  children: React.ReactNode;
}

export const ProjectText: FC<ProjectTextProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

const StyledText = styled("p")({
  fontWeight: 400,
  margin: 0,
  marginBottom: PROJECT_PAGE_CONSTANTS.SECTION.TEXT_MARGIN_BOTTOM,
});
