import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-[#8B5E3C] mb-6">{t('contact.title')}</h2>
        <p className="text-center text-gray-600 mb-8">{t('contact.description')}</p>
        <div className="text-center space-y-3">
          <p>📞 +39 123 456 7890</p>
          <p>📱 WhatsApp: +39 123 456 7890</p>
          <p>📧 contact@ilparchettistatoscano.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
