import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()

  const services = [
    { key: 'installation', icon: '🪵' },
    { key: 'renovation', icon: '🛠️' },
    { key: 'consulting', icon: '📞' }
  ]

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="p-6 bg-white rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition"
              data-aos="fade-up"
            >
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-2">{t(`services.${key}`)}</h3>
              <p className="text-gray-600">{t(`services.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
