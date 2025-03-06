function Gallery() {
    const images = [
      '/images/gallery1.jpg',
      '/images/gallery2.jpg',
      '/images/gallery3.jpg'
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-12">Galleria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg" data-aos="fade-up">
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Gallery
  