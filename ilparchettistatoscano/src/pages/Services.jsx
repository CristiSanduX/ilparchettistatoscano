import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()

  const services = [
    { key: 'installation', icon: '🪵' },
    { key: 'renovation', icon: '🛠️' },
    { key: 'consulting', icon: '📞' }
  ]

  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B5E3C] mb-8">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ key, icon }) => (
            <div key={key} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold">{t(`services.${key}`)}</h3>
              <p className="text-gray-600 mt-2">{t(`services.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
