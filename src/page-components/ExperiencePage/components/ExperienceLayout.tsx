"use client";

import { ReactNode } from "react";
import { EXPERIENCE_PAGE_CONTENT } from "@/src/data";
import { PageLayout } from "@/src/components";

interface ExperienceLayoutProps {
  children: ReactNode;
}

export const ExperienceLayout = ({ children }: ExperienceLayoutProps) => (
  <PageLayout title={EXPERIENCE_PAGE_CONTENT.title}>{children}</PageLayout>
);
