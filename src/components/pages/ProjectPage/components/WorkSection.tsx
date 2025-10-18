import { FC } from "react";
import { styled } from "@mui/material";
import { ProjectWorkSection } from "@/src/data";
import { ProjectText } from "./ProjectText";

interface WorkSectionProps {
  section: ProjectWorkSection;
}

export const WorkSection: FC<WorkSectionProps> = ({ section }) => {
  return (
    <div>
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
        <ProjectText key={itemIndex}>
          {item.includes("\n")
            ? item.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < item.split("\n").length - 1 && <br />}
                </span>
              ))
            : item}
        </ProjectText>
      ))}
    </div>
  );
};

const WorkSectionTitle = styled("p")({
  fontWeight: 400,
  margin: 0,
  marginBottom: 0,
});

const UnderlinedText = styled("span")({
  textDecoration: "underline",
  textUnderlinePosition: "from-font",
});
