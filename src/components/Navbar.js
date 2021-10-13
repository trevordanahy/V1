import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navbar.module.css'

function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <h1>td.dev</h1>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.links}>
                        <Link to="#portfolio">Portfolio</Link>
                        <Link to="#about">About</Link>
                        <Link to="#experience">Experience</Link>
                        <Link to="#contact">Contact</Link>
                    </div>
                    <button>Mobile Menu</button>
                </div>
            </nav>
        </header >
    )
}

export default Navbar
