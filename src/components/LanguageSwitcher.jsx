import { Segmented } from 'antd'
import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage()
  return (
    <Segmented
      size="middle"
      options={[
        { label: 'VI', value: 'vi' },
        { label: 'EN', value: 'en' },
      ]}
      value={lang}
      onChange={(value) => setLang(value)}
    />
  )
}

export default LanguageSwitcher
