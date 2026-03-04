import { useMemo, useState } from 'react'
import { Input, Space } from 'antd'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import TagFilter from '../components/TagFilter'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const { lang } = useLanguage()
  const { projects, ui } = content[lang]
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
  const [activeTag, setActiveTag] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchTag = activeTag ? project.tags.includes(activeTag) : true
      const matchSearch = project.title.toLowerCase().includes(search.toLowerCase())
      return matchTag && matchSearch
    })
  }, [activeTag, search, projects])

  return (
    <PageTransition>
      <section className="container max-w-5xl mx-auto px-4">
        <SectionTitle eyebrow={ui.nav.projects} title={ui.projects.title} description={ui.projects.desc} />

        <Space orientation="vertical" size="middle" className="projects-controls" style={{ width: '100%' }}>
          <Input.Search
            allowClear
            placeholder={ui.projects.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label={ui.projects.searchPlaceholder}
            enterButton={lang === 'vi' ? 'Tìm' : 'Search'}
          />
          <TagFilter tags={allTags} active={activeTag} onChange={setActiveTag} />
        </Space>

        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filtered.length === 0 && <p>{ui.projects.empty}</p>}
        </div>
      </section>
    </PageTransition>
  )
}

export default Projects
