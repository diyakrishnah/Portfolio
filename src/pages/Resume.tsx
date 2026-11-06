import SectionHeading from '../components/SectionHeading'
import { profile, skills, experience } from '../data'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="06 — RESUME" title={<>The one-page <em>snapshot.</em></>} description="A concise overview of my education, skills and experience."/>
    <div className="resume-layout"><div className="resume-sheet"><div className="resume-head"><div><p className="eyebrow">CURRICULUM VITAE</p><h2>{profile.name}</h2><p>{profile.role}</p></div><FileText size={32}/></div><hr/><h3>PROFILE</h3><p>{profile.about}</p><h3>EDUCATION</h3>{profile.education.map(e=><p key={e.degree}><b>{e.degree}</b><br/>{e.institute} · {e.period}<br/>{e.detail}</p>)}<h3>TECHNICAL SKILLS</h3>{skills.map(s=><p key={s.group}><b>{s.group}:</b> {s.items.join(', ')}</p>)}<h3>EXPERIENCE & ACTIVITIES</h3>{experience.map(e=><p key={e.role}><b>{e.role}</b> — {e.org} ({e.period})<br/>{e.detail}</p>)}</div>
      <aside className="resume-side"><p className="eyebrow"><span/> DOWNLOAD</p><h3>Take my profile<br/>with you.</h3><p className="muted">Add your final PDF resume to the public folder and name it <code>resume.pdf</code>.</p><a className="btn btn-primary" href={profile.resume} download><Download size={16}/> Download resume PDF</a><p className="small-note">The download link becomes active once you add your PDF file.</p></aside></div>
  </div>
}
