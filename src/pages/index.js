import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/portfolio/Portfolio'
import '../styles/global.css'

function Home() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <div id="About">About</div>
      <div id="experience">Experience</div>
      <div id="contact">Contact</div>
    </Layout>
  )
}

export default Home

