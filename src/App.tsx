import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/><Route path="/experience" element={<Experience/>}/>
    <Route path="/certificates" element={<Certificates/>}/><Route path="/resume" element={<Resume/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Route></Routes>
}
