import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('home.welcome')}</h1>
        <p className="text-gray-600 mb-6">{t('home.description')}</p>
        <a href="/contact" className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded hover:bg-[#714c2e] transition">
          {t('home.cta')}
        </a>
      </div>
    </div>
  )
}

export default Home
