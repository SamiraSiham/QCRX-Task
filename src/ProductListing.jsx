import React from 'react'
import Nav from './LandingComponents/Nav'
import Sidebar from './product listing/Sidebar'
import Content from './product listing/Content'
import Footer from './LandingComponents/Footer'
const ProductListing = () => {
    return (
        <>
            <Nav />
            <div className='flex flex-col md:flex-row'>
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default ProductListing