"use client";

import React from "react";
import { styled } from "@mui/material";
import { EDUCATION_RESOURCES, EDUCATION_TEXT } from "@/src/data";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal = ({
  isOpen,
  onClose,
}: CertificateModalProps) => {
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
};

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

  "@media (max-width: 540px)": {
    fontSize: "0.88rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
  },

  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});

const PdfViewer = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
});
