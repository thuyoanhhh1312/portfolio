import PropTypes from 'prop-types'
import Header from './Navigation/Header'
import Footer from './Navigation/Footer'
import BackToTop from './BackToTop'

const Layout = ({ children }) => {
  return (
    <div className="app-shell min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
