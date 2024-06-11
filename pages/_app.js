import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer';

 
 
export default function AppPage({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="./logo.jpeg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}