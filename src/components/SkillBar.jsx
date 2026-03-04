import PropTypes from 'prop-types'
import { Progress } from 'antd'

const SkillBar = ({ name, level }) => (
  <div className="skill-bar">
    <div className="skill-bar-top">
      <span>{name}</span>
      <span className="muted">{level}%</span>
    </div>
    <Progress percent={level} showInfo={false} strokeColor={{ from: '#0ea5e9', to: '#f97316' }} />
  </div>
)

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}

export default SkillBar
