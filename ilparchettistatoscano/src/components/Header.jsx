import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Header() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#8B5E3C]">Il Parchettista Toscano</div>
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="hover:text-[#8B5E3C] font-medium">Home</Link>
          <Link to="/about" className="hover:text-[#8B5E3C] font-medium">Chi Siamo</Link>
          <Link to="/services" className="hover:text-[#8B5E3C] font-medium">Servizi</Link>
          <Link to="/gallery" className="hover:text-[#8B5E3C] font-medium">Galleria</Link>
          <Link to="/contact" className="hover:text-[#8B5E3C] font-medium">Contact</Link>
        </nav>
        <div className="space-x-2">
          <button onClick={() => changeLanguage('it')}>🇮🇹</button>
          <button onClick={() => changeLanguage('ro')}>🇷🇴</button>
          <button onClick={() => changeLanguage('en')}>🇬🇧</button>
        </div>
      </div>
    </header>
  )
}

export default Header
