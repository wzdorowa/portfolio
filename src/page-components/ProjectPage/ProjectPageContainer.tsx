"use client";

import React from "react";
import { ProjectPage } from "./ProjectPage";
import { useProject } from "./hooks";

interface ProjectPageContainerProps {
  projectId?: string;
}

export function ProjectPageContainer({ projectId }: ProjectPageContainerProps) {
  const { projectData, handleBackClick } = useProject(projectId);

  return (
    <ProjectPage
      projectData={projectData || null}
      onBackClick={handleBackClick}
    />
  );
}
