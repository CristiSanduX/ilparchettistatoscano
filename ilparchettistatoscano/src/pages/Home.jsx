import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/parquet-hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-white max-w-2xl" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4">{t('home.welcome')}</h1>
        <p className="text-lg mb-6">{t('home.description')}</p>
        <a
          href="/contact"
          className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full hover:bg-[#714c2e] transition"
        >
          {t('home.cta')}
        </a>
      </div>
    </section>
  )
}

export default Home
