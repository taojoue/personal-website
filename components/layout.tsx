import React from 'react'
import footer from './footer'
// import Navbar from './navbar'

/* omment */
const Layout = ({ children }) => {
    return (
        <div>
            {/* <Navbar />*/}
            <main>
                {children}
            </main>
            <footer/> 
        </div>
    )
}

export default Layout