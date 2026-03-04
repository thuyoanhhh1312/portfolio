import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import SkillBar from '../components/SkillBar'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

const Skills = () => {
  const { lang } = useLanguage()
  const { languages, strengths, softSkills, technicalSkills, ui } = content[lang]

  return (
    <PageTransition>
      <section className="container max-w-5xl mx-auto px-4">
        <SectionTitle
          eyebrow={ui.nav.skills}
          title={ui.skills.title}
          description={ui.skills.desc}
        />

        <div className="grid two">
          {technicalSkills.map((group) => (
            <div key={group.category} className="card">
              <h3>{group.category}</h3>
              {group.items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        <div className="grid two">
          <div className="card">
            <h3>{lang === 'vi' ? 'Kỹ năng mềm' : 'Soft skills'}</h3>
            <div className="pill-row">
              {softSkills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>{lang === 'vi' ? 'Ngôn ngữ' : 'Languages'}</h3>
            <ul className="compact-list bullets">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong> – {lang.level}
                </li>
              ))}
            </ul>
            <p className="muted">
              {lang === 'vi' ? 'Điểm mạnh' : 'Strengths'}: {strengths.join(' · ')}.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Skills
