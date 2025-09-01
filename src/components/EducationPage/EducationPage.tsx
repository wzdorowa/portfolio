"use client";

import { EducationLayout } from "./EducationLayout";
import { EducationDescription } from "./EducationDescription";
import { CertificatePreview } from "./CertificatePreview";
import { CertificateModal } from "./CertificateModal";
import { useModal } from "./useModal";

// Основной компонент страницы
export function EducationPage() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <EducationLayout>
      <EducationDescription />
      <CertificatePreview onOpen={openModal} />
      <CertificateModal isOpen={isOpen} onClose={closeModal} />
    </EducationLayout>
  );
}
