import { FC } from "react";
import { styled } from "@mui/material";
import { Overview } from "../../components";
import { PROJECT_PAGE_CONSTANTS } from "./constants";

interface ProjectNotFoundProps {
  onBackClick: () => void;
}

export const ProjectNotFound: FC<ProjectNotFoundProps> = ({ onBackClick }) => {
  return (
    <Root>
      <ContentSection>
        <Overview
          title={PROJECT_PAGE_CONSTANTS.ERROR_MESSAGES.PROJECT_NOT_FOUND}
          text={
            PROJECT_PAGE_CONSTANTS.ERROR_MESSAGES.PROJECT_NOT_FOUND_DESCRIPTION
          }
          withBackButton={true}
          onBackClick={onBackClick}
        />
      </ContentSection>
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  minHeight: PROJECT_PAGE_CONSTANTS.LAYOUT.MIN_HEIGHT,
  backgroundColor: PROJECT_PAGE_CONSTANTS.LAYOUT.BACKGROUND_COLOR,
});

const ContentSection = styled("div")({
  position: "relative",
  height: "100vh",
  backgroundColor: PROJECT_PAGE_CONSTANTS.LAYOUT.BACKGROUND_COLOR,
});
