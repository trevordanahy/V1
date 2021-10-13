import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <main>
                    <div>{children}</div>
                </main>
            </div>
            <footer>Im at the Bottom</footer>
        </div>
    )
}

export default Layout
