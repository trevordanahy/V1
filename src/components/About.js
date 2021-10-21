import React from 'react'
import * as styles from '../styles/about.module.css'

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h3 className={styles.subHeading}>Who I am</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={styles.skills}>
                <h3 className={styles.subHeading}>Skills </h3>
                <ul>
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>GatsbyJS</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About
