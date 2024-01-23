import { Suspense } from "react"
import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FacebookPixelEvents } from "@/components/FacebookPixel"

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Konda Neon',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={bebasNeue.className} 
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <div className='fixed z-20 top-0 w-full'>  
          <Header />
        </div>
        { children }
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <div className=''>
          <Footer />
        </div>
      </body>
    </html>
  )
}
