import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'
import { Download, FolderGit2, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
  const { lang } = useLanguage()
  const { profile, education, ui } = content[lang]
  const edu = education[0]

  return (
    <PageTransition>
      <section className="hero bg-linear-to-br from-sky-50 via-white to-orange-50/40">
        <div className="container hero-grid max-w-5xl mx-auto px-4 grid gap-8 lg:grid-cols-2 items-center">
          <div className="hero-copy space-y-3">
            <h1>
              {ui.hero.heading} <span className="accent">{profile.name}</span>
            </h1>
            <div className="availability-badge">
              <CheckCircle2 size={16} />
              <span className="availability-role">{ui.hero.availabilityLabel}</span>
              <span className="availability-dot">•</span>
              <span className="availability-status">
                <span className="availability-dot status-dot" aria-hidden />
                {ui.hero.availabilityStatus}
              </span>
            </div>
            <p className="lede">{profile.headline}</p>

            <Space className="cta-row" wrap>
              <Link to="/projects">
                <Button type="primary" icon={<FolderGit2 size={18} />} size="large">
                  {ui.hero.ctaProjects}
                </Button>
              </Link>
              <Button icon={<Download size={18} />} href="/ThuyOanh_FE_CV.pdf" download size="large">
                {ui.hero.ctaDownload}
              </Button>
            </Space>

            <div className="contact-inline text-sm text-slate-600 flex flex-wrap gap-3">
              <span className="contact-chip">
                <Phone size={14} /> {profile.phone}
              </span>
              <span className="contact-chip">
                <Mail size={14} /> {profile.email}
              </span>
              <span className="contact-chip">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </div>

          <div className="hero-card">
            <div className="avatar-large">
              <img src={profile.avatar} alt="Ảnh chân dung của Thuy Oanh" />
            </div>
            <div className="hero-meta">
              <div>
                <p className="muted">{ui.hero.roleLabel}</p>
                <strong>{profile.title}</strong>
              </div>
              <div>
                <p className="muted">GPA</p>
                <strong>{edu.gpa}</strong>
              </div>
              <div>
                <p className="muted">{ui.hero.gradLabel}</p>
                <strong>2026</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <SectionTitle
          eyebrow={ui.hero.highlightsTitle}
          title={ui.hero.highlightsTitle}
          description={ui.hero.highlightsDesc}
        />

        <div className="grid three">
          {ui.hero.highlightCards.map((card) => (
            <div key={card.title} className="card">
              <h3>{card.title}</h3>
              <p className="muted">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
