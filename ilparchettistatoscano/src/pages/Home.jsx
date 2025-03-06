import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/parquet-hero.jpg')" }}>
      
      {/* Overlay subtil pentru contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conținut principal */}
      <div className="relative z-10 max-w-3xl mx-auto p-4 md:p-8 text-white" data-aos="fade-up">
        {/* Titlu cu contur alb */}
        <h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md"
          style={{
            WebkitTextStroke: '1px white',   // contur alb subțire
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' // shadow pt contrast pe fundal deschis
          }}
        >
          {t('home.welcome')}
        </h1>

        <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
          {t('home.description')}
        </p>

        {/* Buton elegant */}
        <a 
          href="/contact" 
          className="mt-6 inline-block text-lg font-semibold px-8 py-4 rounded-full bg-[#8B5E3C] text-white shadow-lg hover:bg-[#714c2e] hover:text-white transition-all duration-300 ease-out border border-transparent hover:border-white"
        >
          {t('home.cta')}
        </a>
      </div>
    </section>
  )
}

export default Home
