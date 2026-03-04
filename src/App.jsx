import { BrowserRouter } from 'react-router-dom'
import AppShell from './AppShell'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}

export default App
