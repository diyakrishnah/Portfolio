import SectionHeading from '../components/SectionHeading'
import { profile, skills } from '../data'
import { GraduationCap, MapPin, Target } from 'lucide-react'

export default function About() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="02 — THE PERSON BEHIND THE PIXELS" title={<>A bit about <em>me.</em></>} description="The story, curiosity and skills behind the work."/>
    <div className="about-layout"><div className="about-photo"><img src={profile.photo} alt={`${profile.name} portrait`}/><span>HELLO, WORLD_</span></div><div className="about-content"><p className="lead">{profile.intro}</p><p className="muted">{profile.about}</p><div className="quick-facts"><div><GraduationCap/><span><b>EDUCATION</b>{profile.education[0].degree}</span></div><div><MapPin/><span><b>BASED IN</b>{profile.location}</span></div><div><Target/><span><b>FOCUS</b>Web development & problem-solving</span></div></div></div></div>
    <div className="subsection"><p className="eyebrow"><span/> EDUCATION</p>{profile.education.map(e=><div className="timeline-card" key={e.degree}><div><h3>{e.degree}</h3><p className="muted">{e.institute}</p><p className="small-note">{e.detail}</p></div><span className="date-chip">{e.period}</span></div>)}</div>
    <div className="subsection"><p className="eyebrow"><span/> SKILLS & TOOLKIT</p><div className="skills-grid">{skills.map(s=><div className="skill-panel" key={s.group}><h3>{s.group}</h3><div className="tags">{s.items.map(i=><span key={i}>{i}</span>)}</div></div>)}</div></div>
  </div>
}
