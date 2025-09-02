import { Download as DownloadIcon } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export default function Download() {
  return (
    <section id="download" className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-max">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download SquibTurf Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the local community revolution. Download SquibTurf and start connecting 
            with people around you through location-based social networking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="https://apps.apple.com/app/squibturf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center space-x-3 shadow-lg"
            >
              <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.squibturf.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center space-x-3 shadow-lg"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <DownloadIcon className="w-6 h-6" />
              <span className="font-semibold">Available Now!</span>
            </div>
            <p className="opacity-90 mb-4">
              SquibTurf is now available for download on both iOS and Android. 
              Start connecting with your local community today!
            </p>
            <div className="flex justify-center space-x-4 text-sm opacity-75">
              <span>✓ Free to download</span>
              <span>✓ No ads</span>
              <span>✓ Privacy focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
