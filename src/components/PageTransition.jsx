import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
}

const MotionDiv = motion.div

const PageTransition = ({ children }) => (
  <MotionDiv
    className="page"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </MotionDiv>
)

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTransition
