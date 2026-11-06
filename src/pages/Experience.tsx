import SectionHeading from '../components/SectionHeading'
import { experience } from '../data'
import { ArrowUpRight } from 'lucide-react'

export default function Experience() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="04 — EXPERIENCE & INVOLVEMENT" title={<>Learning by <em>doing.</em></>} description="Events, collaborations and experiences that shaped how I build and work."/>
    <div className="experience-list">{experience.map((e,i)=><article className="experience-item" key={e.role}><div className="exp-index">0{i+1}</div><div className="exp-main"><p className="eyebrow">{e.period}</p><h2>{e.role}</h2><h3>{e.org}</h3><p className="muted">{e.detail}</p></div><ArrowUpRight className="exp-arrow"/></article>)}</div>
    <div className="callout"><p className="eyebrow"><span/> CURRENTLY EXPLORING</p><h2>Better interfaces.<br/><em>More meaningful tech.</em></h2><p className="muted">Always open to collaborative projects, internships and opportunities to learn from people who build with purpose.</p></div>
  </div>
}
