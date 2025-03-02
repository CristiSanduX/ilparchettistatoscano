import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Header() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <div className="text-xl font-bold">Il Parchettista Toscano</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">Chi Siamo</Link>
        <Link to="/services" className="hover:underline">Servizi</Link>
        <Link to="/gallery" className="hover:underline">Galleria</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <div className="space-x-2">
        <button onClick={() => changeLanguage('it')}>🇮🇹</button>
        <button onClick={() => changeLanguage('ro')}>🇷🇴</button>
        <button onClick={() => changeLanguage('en')}>🇬🇧</button>
      </div>
    </header>
  )
}

export default Header
