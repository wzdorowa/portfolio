"use client";

import React, { useState } from "react";
import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ExpandMore } from "@mui/icons-material";
import { Header } from "../components/Header";
import {
  EXPERIENCE_DATA,
  EXPERIENCE_PAGE_CONTENT,
  type ExperienceData,
} from "../data";

// Utility functions
const formatTextWithLinks = (text: string, index: number) => {
  if (text.includes("https://")) {
    const parts = text.split(/(https:\/\/[^\s]+)/);
    return (
      <p key={index}>
        {parts.map((part, partIndex) => {
          if (part.startsWith("https://")) {
            return (
              <Link key={partIndex} href={part} className="link">
                {part}
              </Link>
            );
          }
          return part;
        })}
      </p>
    );
  }
  return <p key={index}>{text}</p>;
};

// Components
interface ExperienceItemProps {
  experience: ExperienceData;
}

function ExperienceHeader({
  period,
  position,
}: Pick<ExperienceData, "period" | "position">) {
  return (
    <TitleSection>
      <Period>{period}</Period>
      <Position>{position}</Position>
    </TitleSection>
  );
}

function ExperienceStack({ stack }: Pick<ExperienceData, "stack">) {
  return <Stack>{stack}</Stack>;
}

interface ExpandableDescriptionProps {
  description: string;
}

function ExpandableDescription({ description }: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

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
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <ExperienceContainer>
      <ExperienceHeader
        period={experience.period}
        position={experience.position}
      />
      <ExperienceStack stack={experience.stack} />
      <ExpandableDescription description={experience.description} />
    </ExperienceContainer>
  );
}

function PageSubtitle() {
  return (
    <Subtitle>
      {EXPERIENCE_PAGE_CONTENT.subtitle}{" "}
      <Link href={EXPERIENCE_PAGE_CONTENT.resumeLink} className="highlight">
        {EXPERIENCE_PAGE_CONTENT.resumeText}
      </Link>
      .{" "}
      <Link href={EXPERIENCE_PAGE_CONTENT.portfolioLink} className="highlight">
        {EXPERIENCE_PAGE_CONTENT.portfolioText}
      </Link>
      .
    </Subtitle>
  );
}

export function ExperiencePage() {
  return (
    <Root>
      <Header />
      <Content>
        <Title variant="h1">{EXPERIENCE_PAGE_CONTENT.title}</Title>
        <PageSubtitle />
        <ExperienceList>
          {EXPERIENCE_DATA.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ExperienceList>
      </Content>
    </Root>
  );
}

// Styled Components

// Layout Components
const Root = styled("div")({
  background: "#fff",
  minHeight: "100vh",
  margin: "0 64px 250px 64px",
  display: "flex",
  flexDirection: "column",
  gap: 125,
});

const Content = styled(Box)({
  maxWidth: 969,
  display: "flex",
  flexDirection: "column",
});

// Typography Components
const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.18,
  marginBottom: 80,
});

const Subtitle = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  marginBottom: 80,

  "& .highlight": {
    color: "#4d7cef",
  },
});

const Period = styled("div")({
  fontSize: 20,
  lineHeight: 1.18,
  color: "#000",
});

const Position = styled("div")({
  fontSize: 48,
  lineHeight: 1.18,
  color: "#000",
  fontWeight: 400,
});

const Stack = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
});

const DropdownTitle = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  fontWeight: 600,
});

// Experience Components
const ExperienceList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 80,
});

const ExperienceContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  width: "100%",
});

const TitleSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 563,
});

const DescriptionSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  width: "100%",
});

// Interactive Components
const DropdownHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",

  "&:hover": {
    opacity: 0.8,
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
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  whiteSpace: "pre-wrap",

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
