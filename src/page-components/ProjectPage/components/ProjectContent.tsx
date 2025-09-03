import { FC } from "react";
import { styled } from "@mui/material";
import { ProjectData } from "@/src/data";
import { ProjectSection } from "./ProjectSection";
import { ProjectText } from "./ProjectText";
import { WorkSection } from "./WorkSection";

interface ProjectContentProps {
  projectData: ProjectData;
}

export const ProjectContent: FC<ProjectContentProps> = ({ projectData }) => {
  return (
    <ProjectContentWrapper>
      <ContentText>
        <ProjectSection title="Задача:">
          <ProjectText>{projectData.content.task}</ProjectText>
        </ProjectSection>

        <ProjectSection title="Основные подзадачи:">
          {projectData.content.subtasks.map((item, index) => (
            <ProjectText key={index}>{item}</ProjectText>
          ))}
        </ProjectSection>

        <ProjectSection title="Проделанная работа:">
          {projectData.content.work.map((section, index) => (
            <WorkSection key={index} section={section} />
          ))}
        </ProjectSection>
      </ContentText>
    </ProjectContentWrapper>
  );
};

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
