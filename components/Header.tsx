import Image from 'next/image'

export default function Header() {

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/logo.png"
                alt="SquibTurf Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-primary-600">SquibTurf</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#app-preview" className="text-gray-600 hover:text-primary-600 transition-colors">App Preview</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#download" className="text-gray-600 hover:text-primary-600 transition-colors">Download</a>
          </nav>
          

          

        </div>
        

      </div>
    </header>
  )
}
