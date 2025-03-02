import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()

  const services = [
    { key: 'installation', icon: '🪵' },
    { key: 'renovation', icon: '🛠️' },
    { key: 'consulting', icon: '📞' }
  ]

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ key, icon }) => (
            <div key={key} className="p-6 border rounded-lg shadow-sm bg-[#F5F5F5] text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{t(`services.${key}`)}</h3>
              <p className="text-gray-600">{t(`services.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
