import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { brands } from '../../config/brands'
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'

const BrandsSlider = () => {
  const { t, currentLanguage } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1) // Mobile: 1 item
      } else {
        setItemsPerPage(3) // Desktop: 3 items
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / itemsPerPage))
    }, 5000)
    return () => clearInterval(interval)
  }, [itemsPerPage])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(brands.length / itemsPerPage)) % Math.ceil(brands.length / itemsPerPage))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  const visibleBrands = brands.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>
            {t('brands.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('brands.subtitle')}
          </p>
        </div>

        <div 
          className="relative"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleBrands.map((brand) => (
              <div 
                key={brand.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <ImageWithFallback 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{brand.name}</h3>
                <p className="text-gray-600 text-center">{brand.description[currentLanguage]}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 translate-x-2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            style={{color: 'var(--primary-color)'}}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 -translate-x-2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            style={{color: 'var(--primary-color)'}}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(brands.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index ? 'w-8' : ''
              }`}
              style={{backgroundColor: currentIndex === index ? 'var(--primary-color)' : '#d1d5db'}}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSlider
