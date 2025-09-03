import { useMemo } from "react";
import { PROJECT_DATA } from "@/src/data";

export const useProject = (projectId?: string) => {
  const currentProjectId = projectId || "crypto-landing";

  const projectData = useMemo(() => {
    return PROJECT_DATA.find((project) => project.id === currentProjectId);
  }, [currentProjectId]);

  const handleBackClick = () => {
    window.history.back();
  };

  return {
    projectData,
    handleBackClick,
    isProjectFound: !!projectData,
  };
};
