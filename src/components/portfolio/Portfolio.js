import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from '../../styles/portfolio.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import GithubLight from '../../img/icons/githubLight.svg'
import LinkIconLight from '../../img/icons/linkLight.svg'


function Portfolio() {
    const projectData = useStaticQuery(graphql`
        query projectData {
            allMarkdownRemark {
            nodes {
                frontmatter {
                title
                description
                stack
                github
                projectLink
                projectImg {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
                }
            }
            }
        }
    `)

    const projects = projectData.allMarkdownRemark.nodes


    return (
        <div className={styles.portfolio}>
            {projects.map(project => (
                <div className={styles.card} key={project.frontmatter.title}>
                    <div className={styles.projectTitle}>
                        <h2>{project.frontmatter.title}</h2>
                    </div>
                    <p>{project.frontmatter.description}</p>
                    <GatsbyImage
                        className={styles.projectImg}
                        image=
                        {getImage(
                            project.frontmatter.projectImg.childImageSharp.gatsbyImageData
                        )}
                        alt="project image"
                    />
                    <div className={styles.projectGithub}>
                        <Link to={project.frontmatter.github}>
                            <GithubLight />
                        </Link>
                    </div>
                    <div className={styles.projectLink}>
                        <Link to={project.frontmatter.projectLink}>
                            <LinkIconLight />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio
