import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            {/* <> </> : React Fragment is used to enclose other components*/}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout