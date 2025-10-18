import { FC } from "react";
import { styled } from "@mui/material";
import { Overview } from "@/src/components/ui";

interface ProjectNotFoundProps {
  onBackClick: () => void;
}

export const ProjectNotFound: FC<ProjectNotFoundProps> = ({ onBackClick }) => {
  return (
    <Root>
      <ContentSection>
        <Overview
          title="Проект не найден"
          text="К сожалению, запрашиваемый проект не найден в портфолио."
          isEducational={false}
          withBackButton={true}
          onBackClick={onBackClick}
        />
      </ContentSection>
    </Root>
  );
};

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
