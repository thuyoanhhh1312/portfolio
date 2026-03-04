import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { Button, Switch } from 'antd'
import { Download, Moon, Sun } from 'lucide-react'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher'
import { useThemeMode } from '../../context/ThemeContext'

const Header = () => {
  const [open, setOpen] = useState(false)
  const { lang } = useLanguage()
  const { mode, toggle } = useThemeMode()
  const { profile, ui } = content[lang]
  const links = [
    { to: '/', label: ui.nav.home },
    { to: '/resume', label: ui.nav.resume },
    { to: '/skills', label: ui.nav.skills },
    { to: '/projects', label: ui.nav.projects },
    { to: '/contact', label: ui.nav.contact },
  ]

  useEffect(() => {
    const target = globalThis?.addEventListener ? globalThis : globalThis?.window
    const onEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    target?.addEventListener('keydown', onEsc)
    return () => target?.removeEventListener('keydown', onEsc)
  }, [])

  const toggleMenu = (e) => {
    if (e.type === 'keydown' && !['Enter', ' '].includes(e.key)) return
    setOpen((prev) => !prev)
  }

  const handleNavigate = () => setOpen(false)

  return (
    <header className="site-header backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="container header-inner max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        <NavLink to="/" className="brand inline-flex items-center gap-3" aria-label="Logo về trang chủ">
          <div className="brand-avatar" aria-hidden>
            <img src={profile.avatar} alt="Ảnh chân dung" />
          </div>
          <div>
            <div className="brand-name">{profile.name}</div>
            <div className="brand-role">{profile.title}</div>
          </div>
        </NavLink>

        <button
          className={clsx('menu-toggle', { open })}
          aria-expanded={open}
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={clsx('nav-links flex items-center gap-3', { open })}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => clsx('nav-link', { active: isActive })}
              onClick={handleNavigate}
            >
              {link.label}
            </NavLink>
          ))}
          <Switch
            size="small"
            checked={mode === 'dark'}
            onChange={toggle}
            checkedChildren={<Moon size={14} />}
            unCheckedChildren={<Sun size={14} />}
            aria-label="Toggle dark mode"
          />
          <LanguageSwitcher />
          <Button type="primary" icon={<Download size={16} />} href="/ThuyOanh_FE_CV.pdf" download>
            {ui.hero.ctaDownload}
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
