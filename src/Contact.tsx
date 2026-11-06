import SectionHeading from '../components/SectionHeading'
import { profile } from '../data'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return <div className="page-wrap inner-page contact-page"><SectionHeading eyebrow="07 — START A CONVERSATION" title={<>Have a good one<br/>in <em>mind?</em></>} description="Have an opportunity, idea or just want to say hello? My inbox is open."/>
    <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a>
    <div className="contact-grid"><a href={`mailto:${profile.email}`}><Mail/><span><b>EMAIL</b>{profile.email}</span><ArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github/><span><b>GITHUB</b>github.com/diyakrishnah</span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><b>LINKEDIN</b>Connect professionally</span><ArrowUpRight/></a><div><MapPin/><span><b>LOCATION</b>{profile.location}</span></div></div>
    <p className="small-note">Remember to replace the sample email and LinkedIn URL in <code>src/data.ts</code> before publishing.</p>
  </div>
}
