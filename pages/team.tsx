import React from 'react'
import Hero  from '@/components/Hero' 
import Footer from '@/components/Footer' 
import Teams from '@/components/Teams'
import Header from '@/components/Header'

export default function MyTeams() {
  return (
    <>
    <Header/>
      <Hero pageName="Our Team" />
    <div className="container mx-auto">
      <Teams />
    </div>
      <Footer />
    </>
  )
}
