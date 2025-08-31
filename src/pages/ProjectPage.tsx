"use client";

import React from "react";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Overview } from "../components";
import { PROJECT_DATA, OVERVIEW_DATA, type ProjectData } from "../data";

interface ProjectPageProps {
  projectId?: string;
}

export function ProjectPage({
  projectId = "crypto-landing",
}: ProjectPageProps) {
  // Получаем данные проекта по ID
  const projectData = PROJECT_DATA.find((project) => project.id === projectId);

  const handleBackClick = () => {
    window.history.back();
  };

  // Если проект не найден, показываем сообщение об ошибке
  if (!projectData) {
    return (
      <Root>
        <ContentSection>
          <Overview
            title="Проект не найден"
            text="К сожалению, запрашиваемый проект не найден в портфолио."
            withBackButton={true}
            onBackClick={handleBackClick}
          />
        </ContentSection>
      </Root>
    );
  }

  // Создаем контент для передачи в Overview
  const projectContent = (
    <ProjectContentWrapper>
      <ContentText>
        <SectionTitle>Задача:</SectionTitle>
        <SectionText>{projectData.content.task}</SectionText>

        <SectionTitle>Основные подзадачи:</SectionTitle>
        {projectData.content.subtasks.map((item, index) => (
          <SectionText key={index}>{item}</SectionText>
        ))}

        <SectionTitle>Проделанная работа:</SectionTitle>
        {projectData.content.work.map((section, index) => (
          <div key={index}>
            <WorkSectionTitle>
              {section.subtitle ? (
                <>
                  <UnderlinedText>{section.title}</UnderlinedText>
                  <span> = {section.subtitle}</span>
                </>
              ) : (
                <UnderlinedText>{section.title}</UnderlinedText>
              )}
            </WorkSectionTitle>
            {section.items.map((item, itemIndex) => (
              <SectionText key={itemIndex}>
                {item.includes("\n")
                  ? item.split("\n").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < item.split("\n").length - 1 && <br />}
                      </span>
                    ))
                  : item}
              </SectionText>
            ))}
          </div>
        ))}
      </ContentText>
    </ProjectContentWrapper>
  );

  return (
    <Root>
      <ContentSection>
        <Overview
          title={projectData.title}
          text={projectContent}
          withBackButton={true}
          onBackClick={handleBackClick}
        />
      </ContentSection>

      <ImageSection>
        <ProjectImage
          src={projectData.image}
          alt={projectData.title}
          width={1200}
          height={800}
          sizes="(max-width: 1920px) 100vw, 1250px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority
        />
      </ImageSection>
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

const ProjectContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  width: "100%",
});

const ContentText = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  width: 435,
});

const SectionTitle = styled("p")({
  fontWeight: 500,
  margin: "20px 0 0 0",

  "&:first-of-type": {
    marginTop: 0,
  },
});

const SectionText = styled("p")({
  fontWeight: 400,
  margin: 0,
  marginBottom: 8,
});

const WorkSectionTitle = styled("p")({
  fontWeight: 400,
  margin: 0,
  marginBottom: 0,
});

const UnderlinedText = styled("span")({
  textDecoration: "underline",
  textUnderlinePosition: "from-font",
});

const ImageSection = styled("div")({
  position: "relative",
  flex: 1,
  height: "100vh", // Фиксированная высота экрана
  overflowY: "auto", // Скролл при переполнении

  // Стили для скроллбара
  "&::-webkit-scrollbar": {
    width: 8,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(0, 0, 0, 0.3)",
  },
});

const ProjectImage = styled(Image)({
  borderRadius: 0,
  maxWidth: "100%",
  height: "auto",
});
