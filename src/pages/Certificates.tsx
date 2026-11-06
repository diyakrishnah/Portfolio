import SectionHeading from '../components/SectionHeading'
import { certificates } from '../data'
import { Award, ExternalLink } from 'lucide-react'

export default function Certificates() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="05 — MILESTONES & LEARNING" title={<>Proof of <em>curiosity.</em></>} description="Workshops, certifications and milestones from my learning journey."/>
    <div className="certificate-grid">{certificates.map((c,i)=><article className="certificate-card" key={c.name}><div className="certificate-icon"><Award/></div><p className="eyebrow">CREDENTIAL / 0{i+1}</p><h3>{c.name}</h3><p className="muted">{c.issuer}</p><span className="small-note">{c.note}</span><div className="certificate-bottom"><span>LEARNING ARCHIVE</span><ExternalLink size={15}/></div></article>)}</div>
    <p className="small-note">Update these sample entries with your actual certificate titles, dates, issuers and credential URLs. You can also add certificate images to the public folder.</p>
  </div>
}
