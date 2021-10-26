import React from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'
import EmailIcon from '../img/icons/mailLight.svg'
import LinkdinLight from '../img/icons/linkedinLight.svg'
import GithubLight from '../img/icons/githubLight.svg'


function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <main>
                    <div>{children}</div>
                </main>
            </div>
            <footer>
                <ul>
                    <li>
                        <Link href="mailto:trevor.danahy@protonmail.com">
                            <EmailIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/trevordanahy">
                            <LinkdinLight />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/trevordanahy">
                            <GithubLight />
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout
