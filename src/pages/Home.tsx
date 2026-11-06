import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, projects, skills } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return <div>
    <section className="hero page-wrap">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><span/> AVAILABLE FOR OPPORTUNITIES</motion.p>
        <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.1}}>Building ideas<br/>into <em>reality.</em></motion.h1>
        <p className="hero-intro">Hey, I'm <strong>{profile.name}</strong> — a computer science student, curious builder and problem solver exploring the intersection of code and creativity.</p>
        <div className="hero-actions"><Link className="btn btn-primary" to="/projects">Explore my work <ArrowUpRight size={17}/></Link><Link className="btn btn-ghost" to="/contact">Get in touch</Link></div>
        <div className="hero-meta"><span><Code2 size={15}/> DEVELOPER IN PROGRESS</span><span><Sparkles size={15}/> {profile.location.toUpperCase()}</span></div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="photo-frame"><img src={profile.photo} alt={`${profile.name} portrait`} /><div className="photo-corner corner-a"/><div className="photo-corner corner-b"/></div>
        <div className="float-card float-code"><Terminal size={15}/><span>const passion = "building";</span></div>
        <div className="float-card float-status"><i/> OPEN TO LEARN</div>
        <div className="hero-index">FIG. 001 — THE CREATOR</div>
      </div>
      <a href="#selected-work" className="scroll-cue"><ArrowDown size={16}/> SCROLL TO EXPLORE</a>
    </section>
    <section className="ticker"><div>DESIGN THINKING <b>✳</b> CREATIVE DEVELOPMENT <b>✳</b> PROBLEM SOLVING <b>✳</b> BUILD • LEARN • REPEAT <b>✳</b> DESIGN THINKING <b>✳</b> CREATIVE DEVELOPMENT <b>✳</b></div></section>
    <section id="selected-work" className="page-wrap section-block">
      <div className="section-top"><div><p className="eyebrow"><span/> 01 — SELECTED WORK</p><h2>Things I've <em>built.</em></h2></div><Link to="/projects" className="text-link">ALL PROJECTS <ArrowUpRight size={15}/></Link></div>
      <div className="project-grid">{projects.filter(p=>p.featured).map(p=><ProjectCard key={p.number} project={p}/>)}</div>
    </section>
    <section className="about-strip"><div className="page-wrap about-strip-inner"><div><p className="eyebrow"><span/> A LITTLE ABOUT ME</p><h2>Curious mind.<br/><em>Practical maker.</em></h2></div><div><p className="muted">{profile.about}</p><Link className="text-link" to="/about">MORE ABOUT ME <ArrowUpRight size={15}/></Link></div></div></section>
    <section className="page-wrap section-block skills-preview"><div><p className="eyebrow"><span/> MY TOOLKIT</p><h2>Tech I work <em>with.</em></h2></div><div className="skill-cloud">{skills.flatMap(s=>s.items).map((s,i)=><span key={s} style={{'--i':i} as React.CSSProperties}>{s}</span>)}</div></section>
  </div>
}
