import { useCallback, useEffect, useState } from 'react'

function Gallery() {
  const galleryItems = [
    {
      id: 'empoli-pvc',
      cover: '/images/gallery/empoli-pvc.svg',
      location: 'Empoli (Firenze)',
      work: 'Montaggio PVC e battiscopa',
      details: 'Posa di pavimento in PVC con battiscopa abbinato per un appartamento moderno.',
      images: [
        '/images/gallery/empoli-pvc/01.svg',
        '/images/gallery/empoli-pvc/02.svg',
        '/images/gallery/empoli-pvc/03.svg'
      ]
    },
    {
      id: 'firenze-prefinito',
      cover: '/images/gallery/firenze-prefinito.svg',
      location: 'Firenze',
      work: 'Parquet prefinito in rovere incollato',
      details: 'Installazione di parquet prefinito in rovere con posa incollata e battiscopa coordinato.',
      images: [
        '/images/gallery/firenze-prefinito/01.svg',
        '/images/gallery/firenze-prefinito/02.svg',
        '/images/gallery/firenze-prefinito/03.svg'
      ]
    },
    {
      id: 'siena-spina-italiana',
      cover: '/images/gallery/siena-spina-italiana.svg',
      location: 'Siena',
      work: 'Spina italiana prefinita',
      details: 'Posa di parquet prefinito a spina italiana per valorizzare un ambiente residenziale.',
      images: [
        '/images/gallery/siena-spina-italiana/01.svg',
        '/images/gallery/siena-spina-italiana/02.svg',
        '/images/gallery/siena-spina-italiana/03.svg'
      ]
    },
    {
      id: 'pisa-rovere-zafiro',
      cover: '/images/gallery/pisa-rovere-zafiro.svg',
      location: 'Pisa',
      work: 'Parquet rovere zaffiro',
      details: 'Montaggio di parquet prefinito rovere zaffiro incollato con battiscopa e rifiniture complete.',
      images: [
        '/images/gallery/pisa-rovere-zafiro/01.svg',
        '/images/gallery/pisa-rovere-zafiro/02.svg',
        '/images/gallery/pisa-rovere-zafiro/03.svg'
      ]
    },
    {
      id: 'firenze-parquet-battiscopa',
      cover: '/images/gallery/firenze-parquet-battiscopa.svg',
      location: 'Firenze',
      work: 'Parquet e battiscopa',
      details: 'Realizzazione di un nuovo pavimento in parquet con battiscopa su misura.',
      images: [
        '/images/gallery/firenze-parquet-battiscopa/01.svg',
        '/images/gallery/firenze-parquet-battiscopa/02.svg',
        '/images/gallery/firenze-parquet-battiscopa/03.svg'
      ]
    },
    {
      id: 'pisa-restauro-doussie',
      cover: '/images/gallery/pisa-restauro-doussie.svg',
      location: 'Pisa',
      work: 'Restauro doussié e iroko',
      details: 'Restauro di parquet in doussié e iroko con sostituzione dei battiscopa.',
      images: [
        '/images/gallery/pisa-restauro-doussie/01.svg',
        '/images/gallery/pisa-restauro-doussie/02.svg',
        '/images/gallery/pisa-restauro-doussie/03.svg'
      ]
    },
    {
      id: 'livorno-montenero',
      cover: '/images/gallery/livorno-montenero.svg',
      location: 'Livorno (Montenero)',
      work: 'Parquet prefinito a plance',
      details: 'Installazione di parquet prefinito a plance con battiscopa coordinato.',
      images: [
        '/images/gallery/livorno-montenero/01.svg',
        '/images/gallery/livorno-montenero/02.svg',
        '/images/gallery/livorno-montenero/03.svg'
      ]
    },
    {
      id: 'firenze-battiscopa-sigillatura',
      cover: '/images/gallery/firenze-battiscopa-sigillatura.svg',
      location: 'Firenze',
      work: 'Battiscopa sigillati',
      details: 'Montaggio di nuovi battiscopa con sigillatura superiore e inferiore per una finitura pulita.',
      images: [
        '/images/gallery/firenze-battiscopa-sigillatura/01.svg',
        '/images/gallery/firenze-battiscopa-sigillatura/02.svg',
        '/images/gallery/firenze-battiscopa-sigillatura/03.svg'
      ]
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openProject = useCallback((project) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }, [])

  const closeProject = useCallback(() => {
    setSelectedProject(null)
    setActiveImageIndex(0)
  }, [])

  const showNextImage = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return

    setActiveImageIndex((current) => (current + 1) % selectedProject.images.length)
  }, [selectedProject])

  const showPreviousImage = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return

    setActiveImageIndex((current) =>
      (current - 1 + selectedProject.images.length) % selectedProject.images.length
    )
  }, [selectedProject])

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = ''
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProject()
      } else if (event.key === 'ArrowRight') {
        showNextImage()
      } else if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeProject, selectedProject, showNextImage, showPreviousImage])

  const hasMultipleImages = selectedProject && selectedProject.images.length > 1

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-6">Galleria</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Una selezione di interventi recenti realizzati in Toscana dal Parchettista Toscano.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openProject(item)}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col text-left transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5E3C] hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              aria-label={`Guarda le foto di ${item.work} a ${item.location}`}
            >
              <img
                src={item.cover}
                alt={`${item.work} - ${item.location}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#8B5E3C] mb-2">{item.work}</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">{item.location}</p>
                <p className="text-gray-600 flex-1">{item.details}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8B5E3C]">
                  Guarda le foto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galleria fotografica ${selectedProject.work}`}
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.images[activeImageIndex]}
                alt={`${selectedProject.work} - ${selectedProject.location} (foto ${activeImageIndex + 1})`}
                className="h-96 w-full object-cover sm:h-[32rem]"
              />
              <button
                type="button"
                onClick={closeProject}
                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-600 transition hover:bg-white hover:text-gray-900"
                aria-label="Chiudi galleria"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 transition hover:bg-white hover:text-gray-900"
                    aria-label="Foto precedente"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 transition hover:bg-white hover:text-gray-900"
                    aria-label="Foto successiva"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-1 text-sm font-medium text-white">
                Foto {activeImageIndex + 1} di {selectedProject.images.length}
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-[2fr_1fr]">
              <div>
                <h3 className="text-2xl font-semibold text-[#8B5E3C]">{selectedProject.work}</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">{selectedProject.location}</p>
                <p className="mt-4 text-gray-600">{selectedProject.details}</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="text-sm font-semibold text-gray-700">Scorri le immagini</p>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-16 w-16 overflow-hidden rounded-lg border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] ${
                        index === activeImageIndex
                          ? 'border-[#8B5E3C]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      aria-label={`Mostra foto ${index + 1}`}
                    >
                      <img src={image} alt="Miniatura progetto" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
