import React from 'react'

function Layout({ children }) {
    return (
        <div className="layout">
            <nav>Nav</nav>
            <div className="content">
                <main>
                    <div>{children}</div>
                </main>
            </div>
        </div>
    )
}

export default Layout
