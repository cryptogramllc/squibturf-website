import Image from 'next/image'
import { MapPin, Users, MessageCircle } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Local Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tired of seeing your newsfeed flooded with content from all around the world? 
              SquibTurf brings you live updates about what's happening right around you on your mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://apps.apple.com/app/squibturf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
                <span>Download for iOS</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.squibturf.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="w-5 h-5" />
                <span>Download for Android</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Location-Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Local Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Real-Time Updates</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Mobile phone mockup */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/assets/400x800bb.png"
                      alt="SquibTurf Mobile App Screenshot"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
