import { projects } from "@/data/projects"
import { ProjectDetail } from "./project-detail"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectDetail slug={slug} />
}
