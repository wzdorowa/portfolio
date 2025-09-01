"use client";

import { ExperienceLayout } from "./ExperienceLayout";
import { PageSubtitle } from "./PageSubtitle";
import { ExperienceList } from "./ExperienceList";

export function ExperiencePage() {
  return (
    <ExperienceLayout>
      <PageSubtitle />
      <ExperienceList />
    </ExperienceLayout>
  );
}
