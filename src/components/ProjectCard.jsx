import PropTypes from 'prop-types'
import { Card, Tag, Button, Space, Tooltip } from 'antd'
import { Link2, Ban } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const colors = ['magenta', 'geekblue', 'cyan', 'volcano', 'green', 'purple']

const ProjectCard = ({ project }) => {
  const { lang } = useLanguage()
  const demoMissing = lang === 'vi' ? 'Chưa triển khai demo' : 'Demo not available'
  return (
    <Card
      title={project.title}
      extra={<span className="muted">{project.caption}</span>}
      className="project-card"
      variant="outlined"
    >
      <Space wrap size={[6, 6]} className="project-tags">
        {project.tags.map((tag, idx) => (
          <Tag color={colors[idx % colors.length]} key={tag}>
            {tag}
          </Tag>
        ))}
      </Space>
      <p className="muted">{project.summary}</p>
      <ul className="compact-list bullets">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Space wrap size={[6, 6]} className="tech-row">
        {project.tech.map((tech) => (
          <Tag variant="filled" key={tech}>
            {tech}
          </Tag>
        ))}
      </Space>
      <Space className="project-actions">
        <Button icon={<FaGithub />} href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </Button>
        {project.demo ? (
          <Button type="primary" icon={<Link2 size={16} />} href={project.demo} target="_blank" rel="noreferrer">
            {lang === 'vi' ? 'Xem demo' : 'View demo'}
          </Button>
        ) : (
          <Tooltip title={demoMissing}>
            <Button icon={<Ban size={16} />} disabled>
              {lang === 'vi' ? 'Demo chưa có' : 'No demo'}
            </Button>
          </Tooltip>
        )}
      </Space>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
    summary: PropTypes.string,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default ProjectCard
