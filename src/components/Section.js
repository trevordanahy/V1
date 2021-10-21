import React from 'react'
import * as styles from '../styles/section.module.css'

function Section({ id, title, children }) {
    return (
        <section id={id}>
            <div className={styles.sectionTitle}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            {children}
        </section>
    )
}

export default Section
