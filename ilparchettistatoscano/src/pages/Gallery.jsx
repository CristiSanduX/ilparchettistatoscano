function Gallery() {
    const images = [
      '/images/gallery1.jpg',
      '/images/gallery2.jpg',
      '/images/gallery3.jpg'
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#8B5E3C] mb-8">Galleria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow">
                <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Gallery
  