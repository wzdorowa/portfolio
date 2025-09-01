"use client";

import React from "react";
import { styled } from "@mui/material";
import { Overview } from "../components";
import { useProject } from "../components/ProjectPage/useProject";
import { ProjectContent } from "../components/ProjectPage/ProjectContent";
import { ProjectImageSection } from "../components/ProjectPage/ProjectImageSection";
import { ProjectNotFound } from "../components/ProjectPage/ProjectNotFound";
import { PROJECT_PAGE_CONSTANTS } from "../components/ProjectPage/constants";

interface ProjectPageProps {
  projectId?: string;
}

export function ProjectPage({ projectId }: ProjectPageProps) {
  const { projectData, handleBackClick, isProjectFound } = useProject(projectId);

  if (!isProjectFound) {
    return <ProjectNotFound onBackClick={handleBackClick} />;
  }

  return (
    <Root>
      <ContentSection>
        <Overview
          title={projectData!.title}
          text={<ProjectContent projectData={projectData!} />}
          withBackButton={true}
          onBackClick={handleBackClick}
        />
      </ContentSection>

      <ProjectImageSection
        src={projectData!.image}
        alt={projectData!.title}
      />
    </Root>
  );
}

// Styled Components
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
