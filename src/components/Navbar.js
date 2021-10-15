import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import * as styles from '../styles/navbar.module.css'

function Navbar() {

    //Hamburger bttn visibility is controlled in css, 
    //mobile nav is controled with useState
    const [isMobile, setIsMobile] = useState(false)


    return (
        <header>
            <nav>
                <div classname={styles.brand}>
                    <h1>td.dev</h1>
                </div>
                <button
                    className={styles.hamburgerMenu}
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div
                    className={`
                    ${styles.navLinks} 
                    ${isMobile ? styles.showMobile : null}
                    `}
                >
                    <Link to="/#portfolio" onClick={() => setIsMobile(!isMobile)}>
                        Portfolio
                    </Link>
                    <Link to="/#about" onClick={() => setIsMobile(!isMobile)} >
                        About
                    </Link>
                    <Link to="/#experience" onClick={() => setIsMobile(!isMobile)} >
                        Experience
                    </Link>
                    <Link to="/#contact" onClick={() => setIsMobile(!isMobile)}>
                        Contact
                    </Link>
                </div>
            </nav>
        </header >
    )
}

export default Navbar
