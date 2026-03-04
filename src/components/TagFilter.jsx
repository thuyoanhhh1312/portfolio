import PropTypes from 'prop-types'
import { Segmented } from 'antd'
import { useLanguage } from '../context/LanguageContext'

const TagFilter = ({ tags, active, onChange }) => {
  const { lang } = useLanguage()
  const allLabel = lang === 'vi' ? 'Tất cả' : 'All'
  return (
    <Segmented
      options={[{ label: allLabel, value: null }, ...tags.map((tag) => ({ label: tag, value: tag }))]}
      value={active}
      onChange={onChange}
      size="middle"
      block
    />
  )
}

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TagFilter
