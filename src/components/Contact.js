import React, { useState } from 'react'
import * as styles from '../styles/contact.module.css'
import Clipboard from '../img/icons/clipboardWhite.svg'

function Contact() {
    const email = "trevor.danahy@protonmail.com"
    /* shows copy to clipboard message */
    const [showMessage, setShowMessage] = useState(false)

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
                    onClick={() => {
                        navigator.clipboard.writeText(email)
                        setShowMessage(true)
                        setTimeout(() => { setShowMessage(false) }, 1000)
                    }}
                >
                    <Clipboard />
                </button>
            </div>
            {showMessage ?
                <div className={styles.message}>copied!</div>
                : null
            }
            <a href="mailto:trevor.danahy@protonmail.com">Open Email Client</a>
        </div>
    )
}

export default Contact
