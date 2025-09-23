"use client";

import { styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import { useExpandable } from "../hooks";
import { formatTextWithLinks } from "../utils";
import { type ExperienceData, EXPERIENCE_PAGE_CONTENT } from "@/src/data";

// Component interfaces
interface ExperienceItemProps {
  experience: ExperienceData;
}

interface ExperienceHeaderProps {
  period: ExperienceData["period"];
  position: ExperienceData["position"];
  company: ExperienceData["company"];
  companyLink: ExperienceData["companyLink"];
}

interface ExpandableDescriptionProps {
  description: string;
}

// Sub-components
const ExperienceHeader = ({
  period,
  position,
  company,
  companyLink,
}: ExperienceHeaderProps) => (
  <TitleSection>
    <Period>{period}</Period>
    <Position>{position}</Position>
    <Company href={companyLink}>{company}</Company>
  </TitleSection>
);

const ExpandableDescription = ({ description }: ExpandableDescriptionProps) => {
  const { isExpanded, toggleExpanded } = useExpandable();

  return (
    <DescriptionSection>
      <DropdownHeader onClick={toggleExpanded}>
        <DropdownTitle>{EXPERIENCE_PAGE_CONTENT.dropdownTitle}</DropdownTitle>
        <ExpandIcon isExpanded={isExpanded}>
          <ExpandMore />
        </ExpandIcon>
      </DropdownHeader>

      {isExpanded && (
        <DescriptionContent>
          {description.split("\n").map(formatTextWithLinks)}
        </DescriptionContent>
      )}
    </DescriptionSection>
  );
};

// Main component
export const ExperienceItem = ({ experience }: ExperienceItemProps) => (
  <ExperienceContainer>
    <ExperienceHeader
      period={experience.period}
      position={experience.position}
      company={experience.company}
      companyLink={experience.companyLink}
    />
    <ExperienceHero>
      <Stack>{experience.stack}</Stack>
      <ExpandableDescription description={experience.description} />
    </ExperienceHero>
  </ExperienceContainer>
);

// Styled components
const ExperienceContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  width: "100%",

  "@media (max-width: 768px)": {
    gap: 24,
  },
  "@media (max-width: 480px)": {
    gap: 20,
  },
});

const ExperienceHero = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

const TitleSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 563,

  "@media (max-width: 480px)": {
    gap: 10,
  },
});

const Period = styled("div")({
  fontSize: "1.25rem",
  lineHeight: 1.18,
  color: "#000",

  "@media (max-width: 768px)": {
    fontSize: "1.15rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "1rem",
  },
});

const Position = styled("h2")({
  fontSize: "3rem",
  lineHeight: 1.18,
  color: "#000",
  fontWeight: 400,
  margin: 0,
  padding: 0,

  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "2rem",
  },
});

const Company = styled(Link)({
  fontSize: "1.25rem",
  lineHeight: 1.18,
  color: "#4D7CEF",
  textDecoration: "none",

  "@media (max-width: 768px)": {
    fontSize: "1.15rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "1rem",
  },

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: 1.5,
    textUnderlineOffset: 1.5,
  },
});

const Stack = styled("div")({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#000",

  "@media (max-width: 768px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },
});

const DescriptionSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  width: "100%",
});

const DropdownHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",

  "&:hover": {
    opacity: 0.7,
  },
});

const DropdownTitle = styled("div")({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#000",
  fontWeight: 600,

  "@media (max-width: 768px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },
});

const ExpandIcon = styled("div")<{ isExpanded: boolean }>(({ isExpanded }) => ({
  width: 24,
  height: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",

  "& svg": {
    fontSize: 24,
    color: "#000",
  },
}));

const DescriptionContent = styled("div")({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#000",
  whiteSpace: "pre-wrap",

  "@media (max-width: 768px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },

  "& p": {
    margin: "0 0 12px 0",

    "&:last-child": {
      marginBottom: 0,
    },
  },

  "& .link": {
    color: "#4d7cef",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
