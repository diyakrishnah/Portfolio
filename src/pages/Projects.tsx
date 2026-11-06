import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import { useState } from 'react'

export default function Projects() {
  const [filter,setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(projects.map(p=>p.category)))]
  const visible = filter === 'All' ? projects : projects.filter(p=>p.category===filter)
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="03 — SELECTED WORK & EXPERIMENTS" title={<>Projects in <em>progress.</em></>} description="A collection of academic builds, experiments and ideas brought to life."/>
    <div className="filter-row">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={filter===c?'filter active':'filter'}>{c}</button>)}</div>
    <div className="project-grid">{visible.map(p=><ProjectCard key={p.number} project={p}/>)}</div>
    <p className="small-note project-disclaimer">Some project descriptions are portfolio summaries. Replace placeholder repository links with the correct public repositories before publishing.</p>
  </div>
}
