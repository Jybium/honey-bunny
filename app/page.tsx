import Landingpage from '@/components/ui-interfaces/LandingPage'
import Footer from '../components/app-reusables/Footer'
import SplashScreen from '../components/app-reusables/SplashScreen'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Landingpage/>
    </main>
  )
}
