import { useMemo } from "react";
import { PROJECT_DATA } from "../../data";
import { PROJECT_PAGE_CONSTANTS } from "./constants";

export const useProject = (projectId?: string) => {
  const currentProjectId =
    projectId || PROJECT_PAGE_CONSTANTS.DEFAULT_PROJECT_ID;

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
