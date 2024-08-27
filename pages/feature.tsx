import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from "next/link"
import Header from '@/components/Header'
import TrustedPlatform from './TrustedPlatform'
import BuyAndSell from '@/components/BuyAndSell'
import GetStarted from '@/components/GetStarted'
import Blog from '@/components/Blog'

export default function Features() {
  return (
    <>
      <Header />
      <div>
        <Hero pageName="Features" />
        <TrustedPlatform />
        <BuyAndSell />
        <GetStarted />
        <Blog />
        <Footer />
      </div>
    </>
  )
}
