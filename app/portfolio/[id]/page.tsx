import {
  ProjectPage,
  getProjectData,
  getAllProjectIds,
} from "@/src/components/pages";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageRouteProps {
  params: {
    id: string;
  };
}

// Генерируем статические параметры для всех проектов
export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

// Генерируем метаданные для SEO
export async function generateMetadata({
  params,
}: ProjectPageRouteProps): Promise<Metadata> {
  const project = getProjectData(params.id);

  if (!project) {
    return {
      title: "Проект не найден | Вероника Здорова",
      description: "Запрашиваемый проект не найден в портфолио.",
    };
  }

  return {
    title: `${project.title} | Вероника Здорова`,
    description: project.content.task.slice(0, 160) + "...",
  };
}

export default function ProjectPageRoute({ params }: ProjectPageRouteProps) {
  // Получаем данные проекта на уровне сервера
  const projectData = getProjectData(params.id);

  // Если проект не найден, показываем 404
  if (!projectData) {
    notFound();
  }

  // Передаем данные проекта в компонент
  return <ProjectPage id={params.id} projectData={projectData} />;
}
