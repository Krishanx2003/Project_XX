import Head from 'next/head'
import React from 'react'
import Navbar from './ui/Navbar/Navbar'
import Footer from './ui/Footer/Footer'

const layout = ({ children }) => {
  return (
   <>
   <Head>
   <title>CommXunity</title>
                <meta name='description' content='Where Tech Enthusiasts Unite!' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/x.svg' />
   </Head>
   <Navbar />
   <main>{children}</main>
   <Footer />
   </>
  )
}

export default layout
