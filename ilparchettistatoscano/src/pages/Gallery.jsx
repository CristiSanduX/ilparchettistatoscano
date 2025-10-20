function Gallery() {
  const galleryItems = [
    {
      src: '/images/gallery/empoli-pvc.svg',
      location: 'Empoli (Firenze)',
      work: 'Montaggio PVC e battiscopa',
      details: 'Posa di pavimento in PVC con battiscopa abbinato per un appartamento moderno.'
    },
    {
      src: '/images/gallery/firenze-prefinito.svg',
      location: 'Firenze',
      work: 'Parquet prefinito in rovere incollato',
      details: 'Installazione di parquet prefinito in rovere con posa incollata e battiscopa coordinato.'
    },
    {
      src: '/images/gallery/siena-spina-italiana.svg',
      location: 'Siena',
      work: 'Spina italiana prefinita',
      details: 'Posa di parquet prefinito a spina italiana per valorizzare un ambiente residenziale.'
    },
    {
      src: '/images/gallery/pisa-rovere-zafiro.svg',
      location: 'Pisa',
      work: 'Parquet rovere zaffiro',
      details: 'Montaggio di parquet prefinito rovere zaffiro incollato con battiscopa e rifiniture complete.'
    },
    {
      src: '/images/gallery/firenze-parquet-battiscopa.svg',
      location: 'Firenze',
      work: 'Parquet e battiscopa',
      details: 'Realizzazione di un nuovo pavimento in parquet con battiscopa su misura.'
    },
    {
      src: '/images/gallery/pisa-restauro-doussie.svg',
      location: 'Pisa',
      work: 'Restauro doussié e iroko',
      details: 'Restauro di parquet in doussié e iroko con sostituzione dei battiscopa.'
    },
    {
      src: '/images/gallery/livorno-montenero.svg',
      location: 'Livorno (Montenero)',
      work: 'Parquet prefinito a plance',
      details: 'Installazione di parquet prefinito a plance con battiscopa coordinato.'
    },
    {
      src: '/images/gallery/firenze-battiscopa-sigillatura.svg',
      location: 'Firenze',
      work: 'Battiscopa sigillati',
      details: 'Montaggio di nuovi battiscopa con sigillatura superiore e inferiore per una finitura pulita.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-6">Galleria</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Una selezione di interventi recenti realizzati in Toscana dal Parchettista Toscano.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <article
              key={item.src}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
              data-aos="fade-up"
            >
              <img
                src={item.src}
                alt={`${item.work} - ${item.location}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#8B5E3C] mb-2">{item.work}</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">{item.location}</p>
                <p className="text-gray-600 flex-1">{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
