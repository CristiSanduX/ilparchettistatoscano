import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('contact.title')}</h2>
        <p className="text-center text-gray-600 mb-8">{t('contact.description')}</p>
        <div className="text-center space-y-4">
          <p>📞 +39 123 456 7890</p>
          <p>📱 WhatsApp: +39 123 456 7890</p>
          <p>📧 contact@ilparchettistatoscano.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
