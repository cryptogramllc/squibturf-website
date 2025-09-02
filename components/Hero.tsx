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
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
              <p>
                Have you ever been on Facebook and thought "I am tired of hearing from everyone around the world, just tell me what's going on around me!"? We certainly have! And that's where the idea for SquibTurf came from.
              </p>
              <p>
                SquibTurf combines the fun of social networking with power of geo-tagging to bring you live updates about your surroundings. Here's how it works:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Log into SquibTurf through Facebook or Google Plus</li>
                <li>SquibTurf lets you know when there is something going on around you that other Squibbers totally dig. Post a memory, a funny joke, a great deal you just got or a review you want others to hear about. It's all possible on SquibTurf</li>
                <li>Connect with users around you. It's as easy as clicking on the user profile or going to your history selecting past user profiles</li>
              </ul>
              <p>
                SquibTurf can be used in a variety of ways to make your life better. Think about it, a "News feed" that is specific to where I am, on "My Turf". Download SquibTurf today and start connecting with people around you!
              </p>
              <p>
                Want to know what's going on around you? Tired of seeing your newsfeed flooded with boring content from all around the world? SquibTurf combines the fun of social networking with your location.
              </p>
            </div>
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
