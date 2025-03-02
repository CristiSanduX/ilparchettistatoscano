import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
      <ul className="mt-4 space-y-2">
        <li>📞 +39 123 456 7890</li>
        <li>📱 WhatsApp: +39 123 456 7890</li>
        <li>📧 Email: contact@ilparchettistatoscano.com</li>
      </ul>
    </div>
  )
}

export default Contact
