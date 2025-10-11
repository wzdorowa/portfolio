"use client";

import { ReactNode } from "react";
import { EDUCATION_TEXT } from "@/src/data";
import { PageLayout } from "@/src/components";

interface EducationLayoutProps {
  children: ReactNode;
}

export const EducationLayout = ({ children }: EducationLayoutProps) => (
  <PageLayout title={EDUCATION_TEXT.title}>{children}</PageLayout>
);
