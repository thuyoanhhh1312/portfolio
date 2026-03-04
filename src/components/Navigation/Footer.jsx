import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { lang } = useLanguage()
  const { profile } = content[lang]

  return (
    <footer className="site-footer">
      <div className="container footer-inner max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        <div>
          <div className="brand-name">{profile.name}</div>
          <p className="muted">{profile.title}</p>
        </div>
        <div className="footer-links flex flex-wrap gap-3 text-slate-700">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={`tel:+84816837690`}>{lang === 'vi' ? 'Điện thoại' : 'Phone'}</a>
          <a href={profile.githubProject} target="_blank" rel="noreferrer">
            {lang === 'vi' ? 'GitHub dự án' : 'Project GitHub'}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
