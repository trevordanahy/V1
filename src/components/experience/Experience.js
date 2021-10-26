import React from 'react'
import { Chrono } from 'react-chrono'
import { experience } from './workExperience'
import * as styles from '../../styles/experience.module.css'

function Timeline() {
    return (
        <div className={styles.container}>
            <Chrono
                items={experience}
                mode="VERTICAL_ALTERNATING"
                hideControls="true"
                cardWidth="auto"
                theme={{
                    primary: "#006B38FF",
                    secondary: "#006B38FF",
                    cardBgColor: "#006B38FF",
                    cardForeColor: "white",
                    titleColor: "white"
                }}
            >
                {experience.map(job => (
                    <div className={styles.cardContent}>
                        <h3>{job.company}</h3>
                        <h4>{job.jobTitle}</h4>
                        <ul className={styles.jobDetails}>
                            {job.jobDetails.map(detail => (
                                <li className={styles.detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                ))}
            </Chrono>
        </div>
    )
}

export default Timeline
