import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

function Header() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#8B5E3C]">Il Parchettista Toscano</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#8B5E3C] font-medium">{t('menu.home')}</Link>
          <Link to="/about" className="hover:text-[#8B5E3C] font-medium">{t('menu.about')}</Link>
          <Link to="/services" className="hover:text-[#8B5E3C] font-medium">{t('menu.services')}</Link>
          <Link to="/gallery" className="hover:text-[#8B5E3C] font-medium">{t('menu.gallery')}</Link>
          <Link to="/contact" className="hover:text-[#8B5E3C] font-medium">{t('menu.contact')}</Link>
        </nav>

        {/* Language Buttons */}
        <div className="hidden md:flex space-x-2">
          <button onClick={() => changeLanguage('it')}>🇮🇹</button>
          <button onClick={() => changeLanguage('ro')}>🇷🇴</button>
          <button onClick={() => changeLanguage('en')}>🇬🇧</button>
        </div>

        {/* Burger Button - Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-[#8B5E3C]">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu - Slide-in */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()} // Prevent close on menu click
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-[#8B5E3C]">Menu</span>
              <button onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>

            <Link to="/" className="hover:text-[#8B5E3C]" onClick={toggleMenu}>{t('menu.home')}</Link>
            <Link to="/about" className="hover:text-[#8B5E3C]" onClick={toggleMenu}>{t('menu.about')}</Link>
            <Link to="/services" className="hover:text-[#8B5E3C]" onClick={toggleMenu}>{t('menu.services')}</Link>
            <Link to="/gallery" className="hover:text-[#8B5E3C]" onClick={toggleMenu}>{t('menu.gallery')}</Link>
            <Link to="/contact" className="hover:text-[#8B5E3C]" onClick={toggleMenu}>{t('menu.contact')}</Link>

            <div className="flex space-x-3 pt-6">
              <button onClick={() => changeLanguage('it')}>🇮🇹</button>
              <button onClick={() => changeLanguage('ro')}>🇷🇴</button>
              <button onClick={() => changeLanguage('en')}>🇬🇧</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
