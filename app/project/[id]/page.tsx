import { ProjectPage } from "../../../src/components/ProjectPage";

interface ProjectByIdPageProps {
  params: {
    id: string;
  };
}

export default function ProjectByIdPage({ params }: ProjectByIdPageProps) {
  return <ProjectPage projectId={params.id} />;
}
