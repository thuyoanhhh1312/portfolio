import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

const Resume = () => {
  const { lang } = useLanguage()
  const { personal, objective, education, ui } = content[lang]

  return (
    <PageTransition>
      <section className="container max-w-5xl mx-auto px-4">
        <SectionTitle eyebrow={ui.nav.resume} title={ui.resume.title} description={ui.resume.desc} />

        <div className="card grid two">
          <div>
            <h3>{lang === 'vi' ? 'Thông tin cá nhân' : 'Personal info'}</h3>
            <dl className="info-grid">
              {personal.map((item) => (
                <div key={item.label} className="info-item">
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href} className="link">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3>{lang === 'vi' ? 'Mục tiêu nghề nghiệp' : 'Career objective'}</h3>
            <p>{objective}</p>
          </div>
        </div>

        <div className="grid two">
          <div className="card">
            <h3>{lang === 'vi' ? 'Học vấn' : 'Education'}</h3>
            {education.map((edu) => (
              <div key={edu.school} className="edu-block">
                <div className="edu-head">
                  <div className="pill subtle">{edu.timeframe}</div>
                  <strong className="edu-school">{edu.school}</strong>
                </div>
                <p className="muted edu-meta">
                  {lang === 'vi' ? 'Chuyên ngành' : 'Major'}: {edu.major}
                </p>
                <p className="muted edu-meta">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </PageTransition>
  )
}

export default Resume
