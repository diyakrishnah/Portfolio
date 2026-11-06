import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-year">{project.year}</span></div>
    <div className="project-art"><div className="art-grid"/><span className="art-symbol">{project.number}</span><span className="art-label">DIGITAL<br/>EXPERIMENT</span></div>
    <div className="project-info"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p className="muted">{project.description}</p>
      <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
      <a className="text-link" href={project.link} target="_blank" rel="noreferrer"><Github size={15}/> View project <ArrowUpRight size={15}/></a>
    </div>
  </article>
}
