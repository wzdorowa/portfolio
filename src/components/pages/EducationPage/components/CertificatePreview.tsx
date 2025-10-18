"use client";

import React from "react";
import { styled } from "@mui/material";
import { ZoomInSharp } from "@mui/icons-material";
import { EDUCATION_RESOURCES, EDUCATION_TEXT } from "@/src/data";

interface CertificatePreviewProps {
  onOpen: () => void;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  onOpen,
}) => (
  <PdfThumb onClick={onOpen}>
    <CertificateImage
      src={EDUCATION_RESOURCES.educationImage}
      alt={EDUCATION_TEXT.certificateAlt}
    />
    <IconWrapper className="magnify-icon">
      <ZoomInSharp />
    </IconWrapper>
  </PdfThumb>
);

const PdfThumb = styled("div")({
  position: "relative",
  width: 240,
  height: 158,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  transition: "transform 0.2s",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.04)",
    "& .magnify-icon": {
      opacity: 1,
    },
  },
});

const CertificateImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "filter 0.3s ease",
});

const IconWrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  borderRadius: "50%",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  pointerEvents: "none",

  "& svg": {
    fontSize: 24,
  },
});
