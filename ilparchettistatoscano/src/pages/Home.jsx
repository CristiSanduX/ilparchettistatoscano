import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/parquet-hero.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-6 rounded-lg" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{t('home.welcome')}</h1>
        <p className="text-white mt-4">{t('home.description')}</p>
        <a href="/contact" className="mt-6 inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded hover:bg-[#714c2e] transition">
          {t('home.cta')}
        </a>
      </div>
    </section>
  )
}

export default Home
