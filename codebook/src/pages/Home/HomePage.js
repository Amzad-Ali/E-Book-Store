import React from 'react'
import Hero from './Components/Hero'
import Faq from './Components/Faq'
import Testimonial from './Components/Testimonial'
import FeaturedProducts from './Components/FeaturedProducts'

export default function HomePage() {
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Testimonial/>
      <Faq/>
    </main>
  )
}
