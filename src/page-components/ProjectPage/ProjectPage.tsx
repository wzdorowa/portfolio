"use client";

import React from "react";
import { styled } from "@mui/material";
import { ProjectData } from "@/src/data";
import {
  ProjectContent,
  ProjectImageSection,
  ProjectNotFound,
  ProjectOverview,
} from "./components";

/**
 * ProjectPage - шаблонный компонент для отображения страницы проекта
 *
 * Этот компонент является чистым презентационным компонентом, который
 * принимает данные проекта как пропсы и отображает их в соответствующем формате.
 *
 * Данные должны приходить извне (например, с уровня страницы в Next.js),
 * что делает компонент полностью переиспользуемым и тестируемым.
 *
 * @param projectData - данные проекта для отображения (null если проект не найден)
 * @param onBackClick - обработчик клика по кнопке "Назад" (опционально)
 */

interface ProjectPageProps {
  id: string;
  /** Данные проекта для отображения. Если null, показывается страница "Проект не найден" */
  projectData: ProjectData | null;
  /** Обработчик клика по кнопке "Назад". По умолчанию - window.history.back() */
  onBackClick?: () => void;
}

export function ProjectPage({
  id,
  projectData,
  onBackClick,
}: ProjectPageProps) {
  const handleBackClick = onBackClick || (() => window.history.back());

  if (!projectData) {
    return <ProjectNotFound onBackClick={handleBackClick} />;
  }

  console.log("projectId", id);

  return (
    <Root>
      <ContentSection>
        <ProjectOverview
          backgroundColor={projectData.backgroundColor}
          textColor={projectData.textColor}
          title={projectData.title}
          isEducational={projectData.isEducational}
          text={<ProjectContent projectData={projectData} />}
          onBackClick={handleBackClick}
        />
      </ContentSection>

      <ProjectImageSection
        src={projectData.image}
        alt={projectData.title}
        id={id}
      />
    </Root>
  );
}

// Styled Components
const Root = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#ffffff",

  "@media (max-width: 1280px)": {
    flexDirection: "column",
    minHeight: 1,
  },
});

const ContentSection = styled("div")({
  position: "relative",
  height: "100vh",
  backgroundColor: "#ffffff",

  "@media (max-width: 1280px)": {
    height: "75vh",
  },
  "@media (max-width: 768px)": {
    height: "85vh",
  },
});
