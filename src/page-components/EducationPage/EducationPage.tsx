"use client";

import {
  EducationLayout,
  EducationDescription,
  CertificatePreview,
  CertificateModal,
} from "./components";
import { useModal } from "./hooks";

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
