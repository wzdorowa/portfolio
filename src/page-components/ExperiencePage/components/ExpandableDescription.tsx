"use client";

import { styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useExpandable } from "../hooks";
import { formatTextWithLinks } from "../utils";
import { EXPERIENCE_PAGE_CONTENT } from "@/src/data";

interface ExpandableDescriptionProps {
  description: string;
}

export const ExpandableDescription = ({
  description,
}: ExpandableDescriptionProps) => {
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
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  fontWeight: 600,
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
