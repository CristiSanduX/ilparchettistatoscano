import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  )
}

export default About
