import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/hero.module.css'

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <p>Hi, I'm,</p>
                <h2>Trevor Danahy.</h2>
                <h3>A project manager turned developer.</h3>
                <p>Looking for new challenges and opportunities.</p>
                <button>My Resume</button>
            </div>
            <div className={styles.heroImg}>
                <StaticImage
                    src="../img/laptop.jpg"
                    alt="dev laptop"
                    placeholder="blurred"
                />
            </div>
        </section>
    )
}

export default Hero
