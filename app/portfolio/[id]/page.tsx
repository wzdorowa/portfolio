import { ProjectPage } from "../../../src/components/ProjectPage";
import { PROJECT_DATA } from "../../../src/data/projectData";
import { Metadata } from "next";

interface ProjectPageRouteProps {
  params: {
    id: string;
  };
}

// Генерируем статические параметры для всех проектов
export async function generateStaticParams() {
  return PROJECT_DATA.map((project) => ({
    id: project.id,
  }));
}

// Генерируем метаданные для SEO
export async function generateMetadata({
  params,
}: ProjectPageRouteProps): Promise<Metadata> {
  const project = PROJECT_DATA.find((p) => p.id === params.id);

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
  return <ProjectPage projectId={params.id} />;
}
