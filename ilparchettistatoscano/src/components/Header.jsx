import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

function Header() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false) // Închidem meniul când schimbă limba
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo pe stânga */}
        <div className="text-2xl font-bold text-[#8B5E3C]">Il Parchettista Toscano</div>

        {/* Meniu centrat pe desktop */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <CustomNavLink to="/" label={t('menu.home')} index={1} />
          <CustomNavLink to="/about" label={t('menu.about')} index={2} />
          <CustomNavLink to="/services" label={t('menu.services')} index={3} />
          <CustomNavLink to="/gallery" label={t('menu.gallery')} index={4} />
          <CustomNavLink to="/contact" label={t('menu.contact')} index={5} />
        </nav>

        {/* Steaguri în dreapta pe desktop */}
        <div className="hidden md:flex space-x-2">
          <button onClick={() => changeLanguage('it')} className="text-xl hover:scale-110 transition">🇮🇹</button>
          <button onClick={() => changeLanguage('ro')} className="text-xl hover:scale-110 transition">🇷🇴</button>
          <button onClick={() => changeLanguage('en')} className="text-xl hover:scale-110 transition">🇬🇧</button>
        </div>

        {/* Burger Menu pt. Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-[#8B5E3C]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Slide-in */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}>
          <div 
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 space-y-6 flex flex-col justify-start" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header meniu mobil */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-[#8B5E3C]">Menu</span>
              <button onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>

            {/* Link-uri mobile cu spațiu corect */}
            <CustomNavLink to="/" label={t('menu.home')} index={1} onClick={toggleMenu} />
            <CustomNavLink to="/about" label={t('menu.about')} index={2} onClick={toggleMenu} />
            <CustomNavLink to="/services" label={t('menu.services')} index={3} onClick={toggleMenu} />
            <CustomNavLink to="/gallery" label={t('menu.gallery')} index={4} onClick={toggleMenu} />
            <CustomNavLink to="/contact" label={t('menu.contact')} index={5} onClick={toggleMenu} />

            {/* Steaguri în meniu mobil */}
            <div className="flex justify-center space-x-4 pt-4">
              <button onClick={() => changeLanguage('it')} className="text-2xl hover:scale-110 transition">🇮🇹</button>
              <button onClick={() => changeLanguage('ro')} className="text-2xl hover:scale-110 transition">🇷🇴</button>
              <button onClick={() => changeLanguage('en')} className="text-2xl hover:scale-110 transition">🇬🇧</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function CustomNavLink({ to, label, index, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-[#8B5E3C] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#714c2e] group`}
      style={{ display: 'inline-block', transformOrigin: 'center' }}
    >
      {label}
      <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#8B5E3C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left`} />
      <style>
        {`
          .group:hover {
            transform: rotate(${index % 2 === 0 ? '-5deg' : '5deg'});
          }
        `}
      </style>
    </Link>
  )
}

export default Header
