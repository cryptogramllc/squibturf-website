import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function AppPreview() {
  const screenshots = [
    { src: '/assets/400x800bb.png', alt: 'SquibTurf Home Screen' },
    { src: '/assets/400x800bb-1.png', alt: 'SquibTurf Location Features' },
    { src: '/assets/400x800bb-2.png', alt: 'SquibTurf Community' },
    { src: '/assets/400x800bb-3.png', alt: 'SquibTurf Messages' },
  ]

  return (
    <section id="app-preview" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See SquibTurf in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of location-based social networking with our intuitive mobile app. 
            Connect with your community like never before.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  <div className="relative">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              

            </div>
          ))}
        </div>
        

      </div>
    </section>
  )
}
