import React from 'react'
import Nav from './LandingComponents/Nav'
import Sidebar from './product listing/Sidebar'
import Content from './product listing/Content'
import Footer from './LandingComponents/Footer'
import ViewCatalog from './product listing/ViewCatalog'
import { useState } from 'react'
const ProductListing = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
        <>
            <Nav />
            <div className='flex flex-col md:flex-row'>
                {/* <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/> */}
                <Sidebar/>
                <Content />
                {/* <Content sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}
            </div>
            <ViewCatalog/> *
            <Footer />
            {/* <Content/> */}
        </>
    )
}

export default ProductListing