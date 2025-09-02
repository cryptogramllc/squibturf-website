import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AppPreview from '@/components/AppPreview'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </main>
  )
}
