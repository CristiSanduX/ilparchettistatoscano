import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-8">{t('contact.title')}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{t('contact.description')}</p>

        <div className="text-center space-y-4">
          <p className="text-lg">📞 +39 123 456 7890</p>
          <p className="text-lg">📱 WhatsApp: +39 123 456 7890</p>
          <p className="text-lg">📧 contact@ilparchettistatoscano.com</p>
        </div>

        {/* Facebook Page Plugin Embed */}
        <div className="mt-12 flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIlparchettistatoscano.it&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
