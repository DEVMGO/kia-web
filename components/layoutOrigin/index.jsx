import React, { Fragment } from 'react'
import Navbar from './navbar'
import Footer from './footer'

const LayoutOrigin = (props) => {
  return (
    <Fragment>
      <div className='w-full flex items-start justify-center'>
        <div className='w-full max-w-[2700px] flex items-center justify-start flex-col overflow-hidden'>
          <Navbar />

          <main className='w-full h-full min-h-screen flex items-center justify-start flex-col z-50 overflow-hidden'>
            {props.children}
          </main>

          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default LayoutOrigin