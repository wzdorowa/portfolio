import { ProjectPage } from "../../../src/pages/ProjectPage";

interface ProjectByIdPageProps {
  params: {
    id: string;
  };
}

export default function ProjectByIdPage({ params }: ProjectByIdPageProps) {
  return <ProjectPage projectId={params.id} />;
}
