import React from 'react'
import About from '../components/About'
import Experience from '../components/experience/Experience'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/Contact'
import Section from '../components/Section'
import '../styles/global.css'

function Home() {
  return (
    <Layout>
      <Hero />
      <Section id="portfolio" title="Portfolio">
        <Portfolio />
      </Section>
      <Section id="about" title="About">
        <About />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </Layout>
  )
}

export default Home

