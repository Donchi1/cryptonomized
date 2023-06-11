import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
   
    <div className='width-more mx-auto mb-10'>
     {children}
    </div> 
    
  )
}

export default Layout