import { PROJECT_DATA, ProjectData } from "@/src/data/projectData";

/**
 * Получает данные проекта по ID
 * @param projectId - ID проекта
 * @returns данные проекта или null, если проект не найден
 */
export function getProjectData(projectId: string): ProjectData | null {
  return PROJECT_DATA.find((project) => project.id === projectId) || null;
}

/**
 * Получает все доступные ID проектов
 * @returns массив ID проектов
 */
export function getAllProjectIds(): string[] {
  return PROJECT_DATA.map((project) => project.id);
}

/**
 * Проверяет, существует ли проект с данным ID
 * @param projectId - ID проекта
 * @returns true, если проект существует
 */
export function projectExists(projectId: string): boolean {
  return PROJECT_DATA.some((project) => project.id === projectId);
}
