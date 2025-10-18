import { FC } from "react";
import { styled } from "@mui/material";

interface ProjectTextProps {
  children: React.ReactNode;
}

export const ProjectText: FC<ProjectTextProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

const StyledText = styled("p")({
  fontWeight: 400,
  margin: 0,
  marginBottom: 8,
});
