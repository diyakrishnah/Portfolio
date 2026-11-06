export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1>{description && <p className="section-desc">{description}</p>}</div>
}
