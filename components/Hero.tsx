import React from 'react'

import Link from 'next/link'

function Hero({ pageName } : {pageName: string}) {
  return (
    <section style={{backgroundImage: "url(/assets/img/slider-2.jpg)"}} className="w-full h-96 flex justify-center items-center  footer-bg homepage-3 bg-gradient-to-b from-blue-gray-400 to-blue-gray-600 "  >
      <div className="container mx-auto text-center text-white ">
        <div className="mb-10">
          <h2 className="font-bold uppercase text-5xl ">
            {pageName}

          </h2>
        </div>
        <div>
          <Link href="/">Home</Link>
          <span className="mx-4">/</span> <span>{pageName}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
