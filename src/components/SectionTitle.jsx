import PropTypes from 'prop-types'

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="section-title mb-6 space-y-2">
    {eyebrow && <span className="eyebrow text-sky-500 font-bold tracking-[0.12em] uppercase">{eyebrow}</span>}
    <div className="section-title-row flex items-center gap-3">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <div className="section-divider flex-1 h-px bg-slate-200" aria-hidden />
    </div>
    {description && <p className="muted text-slate-600">{description}</p>}
  </div>
)

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default SectionTitle
