import { MapPin, Users, MessageSquare, Star, Shield, Smartphone, Bell, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Feed",
      description: "See posts and updates from people in your immediate area. No more global noise, just local relevance."
    },
    {
      icon: Users,
      title: "Local Community",
      description: "Connect with neighbors, discover local events, and build relationships with people around you."
    },
    {
      icon: MessageSquare,
      title: "Real-Time Chat",
      description: "Chat with people in your area instantly. Share memories, jokes, and local recommendations."
    },
    {
      icon: Star,
      title: "Local Reviews",
      description: "Share reviews of nearby businesses and discover great places recommended by your community."
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get notified when something interesting happens near you. Never miss local events or deals."
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Build a stronger local community by connecting with people who share your neighborhood."
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SquibTurf?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience social networking like never before with location-based features 
            that bring your community closer together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary-100' : 'bg-secondary-100'} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-600'}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
