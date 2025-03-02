import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('home.welcome')}</h1>
      <p>{t('home.description')}</p>
    </div>
  )
}

export default Home
