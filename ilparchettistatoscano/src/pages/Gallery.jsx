function Gallery() {
    const images = [
      '/images/sample1.jpg',
      '/images/sample2.jpg',
      '/images/sample3.jpg'
    ]
  
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Galleria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow">
                <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-60 object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Gallery
  