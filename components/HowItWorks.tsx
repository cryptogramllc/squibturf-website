import { LogIn, MapPin, Users, Heart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: LogIn,
      title: "Sign Up",
      description: "Log into SquibTurf through Facebook or Google Plus for a seamless experience."
    },
    {
      number: "02", 
      icon: MapPin,
      title: "Discover Your Area",
      description: "SquibTurf automatically shows you what's happening around your location."
    },
    {
      number: "03",
      icon: Users,
      title: "Connect & Share",
      description: "Post memories, jokes, deals, or reviews. Connect with users around you."
    },
    {
      number: "04",
      icon: Heart,
      title: "Build Community",
      description: "Create lasting connections with people in your local area and build your community."
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SquibTurf Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with SquibTurf is simple. Follow these easy steps to begin 
            connecting with your local community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
