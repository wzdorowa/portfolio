"use client";

import React, { useState } from "react";
import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ZoomInSharp } from "@mui/icons-material";
import { Header } from "../components/Header";
import { EDUCATION_RESOURCES, EDUCATION_TEXT } from "../data";

// Components
interface CertificatePreviewProps {
  onOpen: () => void;
}

function CertificatePreview({ onOpen }: CertificatePreviewProps) {
  return (
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
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CertificateModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <PdfViewer
          src={EDUCATION_RESOURCES.pdfFile}
          title={EDUCATION_TEXT.modalTitle}
          width="100%"
          height="100%"
        />
      </ModalContent>
    </Modal>
  );
}

function EducationDescription() {
  return (
    <Description>
      {EDUCATION_TEXT.paragraphs.map((paragraph, index) => {
        if (index === 2) {
          return (
            <p key={index}>
              Весной 2025 года завершила обучение в «Школе дизайнеров» Бюро
              Горбунова, остановившись на{" "}
              <Link href={EDUCATION_RESOURCES.bureauLink} className="highlight">
                {EDUCATION_TEXT.linkText}
              </Link>
              {" (посмотреть можно в самом низу страницы)"}. До обучения
              смотрела на дизайн-макеты только со стороны разработчика.
            </p>
          );
        }
        return <p key={index}>{paragraph}</p>;
      })}
    </Description>
  );
}

export function EducationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Root>
      <Header />
      <Content>
        <Title variant="h1">{EDUCATION_TEXT.title}</Title>
        <EducationDescription />
        <CertificatePreview onOpen={handleOpenModal} />
        <CertificateModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </Content>
    </Root>
  );
}

// Styled Components
const Root = styled("div")({
  background: "#fff",
  minHeight: "100vh",
  margin: "0 64px",
  display: "flex",
  flexDirection: "column",
  gap: 125,
});

const Content = styled(Box)({
  maxWidth: 720,
  display: "flex",
  flexDirection: "column",
});

const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  marginBottom: 54,
});

const Description = styled("div")({
  fontSize: 16,
  lineHeight: 1.7,
  color: "#000",
  marginBottom: 32,

  "& p": {
    marginBottom: 12,
  },

  "& .highlight": {
    color: "#4d7cef",
  },
});

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

const Modal = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

const ModalContent = styled("div")({
  position: "relative",
  width: "90vw",
  height: "90vh",
  backgroundColor: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
});

const CloseButton = styled("button")({
  position: "absolute",
  top: 16,
  right: 16,
  width: 32,
  height: 32,
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "white",
  fontSize: 16,
  cursor: "pointer",
  zIndex: 1001,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});

const PdfViewer = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
});
