"use client";

import { styled } from "@/src/styles";
import {
  EducationDescription,
  CertificatePreview,
  CertificateModal,
} from "./components";
import { useModal } from "./hooks";
import { EDUCATION_RESOURCES, EDUCATION_TEXT } from "@/src/data";
import { PageLayout } from "@/src/components/ui";

// Основной компонент страницы
export function EducationPage() {
  const {
    isOpenDesign: isOpenFrontend,
    openModalDesign: openModalFrontend,
    closeModalDesign: closeModalFrontend,
  } = useModal();
  const { isOpenDesign, openModalDesign, closeModalDesign } = useModal();

  return (
    <PageLayout title={EDUCATION_TEXT.title}>
      <EducationDescription />
      <CertificatesBox>
        <CertificatePreview
          onOpen={openModalFrontend}
          image={EDUCATION_RESOURCES.frontendImage}
          alt={EDUCATION_TEXT.frontendAlt}
        />
        <CertificateModal
          isOpen={isOpenFrontend}
          onClose={closeModalFrontend}
          pdfFile={EDUCATION_RESOURCES.pdfFrontend}
          title={EDUCATION_TEXT.modalTitle}
        />

        <CertificatePreview
          onOpen={openModalDesign}
          image={EDUCATION_RESOURCES.designImage}
          alt={EDUCATION_TEXT.designAlt}
        />
        <CertificateModal
          isOpen={isOpenDesign}
          onClose={closeModalDesign}
          pdfFile={EDUCATION_RESOURCES.pdfDesign}
          title={EDUCATION_TEXT.modalTitle}
        />
      </CertificatesBox>
    </PageLayout>
  );
}

const CertificatesBox = styled("div")({
  display: "flex",
  gap: 24,

  "@media (max-width: 580px)": {
    flexDirection: "column",
  },
});
