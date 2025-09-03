"use client";

import React from "react";
import { styled } from "@mui/material";
import { Overview } from "@/src/components";
import { ProjectData } from "@/src/data";
import {
  ProjectContent,
  ProjectImageSection,
  ProjectNotFound,
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
  /** Данные проекта для отображения. Если null, показывается страница "Проект не найден" */
  projectData: ProjectData | null;
  /** Обработчик клика по кнопке "Назад". По умолчанию - window.history.back() */
  onBackClick?: () => void;
}

export function ProjectPage({ projectData, onBackClick }: ProjectPageProps) {
  const handleBackClick = onBackClick || (() => window.history.back());

  if (!projectData) {
    return <ProjectNotFound onBackClick={handleBackClick} />;
  }

  return (
    <Root>
      <ContentSection>
        <Overview
          title={projectData.title}
          isEducational={projectData.isEducational}
          text={<ProjectContent projectData={projectData} />}
          withBackButton={true}
          onBackClick={handleBackClick}
        />
      </ContentSection>

      <ProjectImageSection src={projectData.image} alt={projectData.title} />
    </Root>
  );
}

// Styled Components
const Root = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#ffffff",
});

const ContentSection = styled("div")({
  position: "relative",
  height: "100vh",
  backgroundColor: "#ffffff",
});
