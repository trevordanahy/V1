import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'

function Home() {
  return (
    <Layout>
      <div id="portfolio">Portfolio</div>
      <div id="About">About</div>
      <div id="experience">Experience</div>
      <div id="contact">Contact</div>
    </Layout>
  )
}

export default Home

