import React from 'react'
import * as styles from '../styles/contact.module.css'

function Contact() {
    const email = "trevor.danahy@protonmail.com"

    return (
        <div className={styles.contact}>
            <h2>Please Feel free to reach out.</h2>
            <p>
                I am currently looking for new opportunities
                If you you want to collaborate, ask questions, or
                say hello you can reach me at the email below.
                <br />
            </p>
            <div className={styles.email}>
                <h4>trevor.danahy@protonmail.com</h4>
                <button
                    onClick={() => navigator.clipboard.writeText(email)}
                >
                    copy
                </button>
            </div>
            <button>Open Email Client</button>
        </div>
    )
}

export default Contact
