import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

const NotFound = () => {
  const { lang } = useLanguage()
  const { ui } = content[lang]
  return (
    <PageTransition>
      <section className="container not-found">
        <div className="card">
          <p className="eyebrow">404</p>
          <h1>{ui.notFound.title}</h1>
          <p className="muted">
            {lang === 'vi'
              ? 'Có thể đường dẫn đã đổi. Quay lại trang chủ để tiếp tục.'
              : 'This route may have changed. Head back home to continue.'}
          </p>
          <Link className="btn primary" to="/">
            {ui.notFound.back}
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
