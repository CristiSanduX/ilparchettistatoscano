import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('services.title')}</h1>
      <ul className="list-disc ml-5">
        <li>{t('services.installation')}</li>
        <li>{t('services.renovation')}</li>
        <li>{t('services.consulting')}</li>
      </ul>
    </div>
  )
}

export default Services
