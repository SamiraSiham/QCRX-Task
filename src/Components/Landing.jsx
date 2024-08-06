import React from 'react'
// import Nav from '../LandingComponents/Nav'
import Nav from './LandingComponents/Nav'
import Hero from './LandingComponents/Hero'
import WhyChooseUs from './LandingComponents/WhyChooseUs'
import SpeTest2 from './LandingComponents/SpeTest2'
import Tour from './LandingComponents/Tour'
import Services from './LandingComponents/Services'
import About from './LandingComponents/About'
import Map from './LandingComponents/Map'
import Standards from './LandingComponents/Standards'
import Faq from './LandingComponents/Faq'
import Accreditation from './LandingComponents/Accreditation'
import Footer from './LandingComponents/Footer'
import ViewCatalog from './LandingComponents/ViewCatalog'
// import Video from './LandingComponents/Video'
import Copyright from './LandingComponents/Copyright'
const Landing = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <WhyChooseUs/>
    <SpeTest2/>
    <Tour/>
    <Services/>
    <About/>
    <Map/>
    <Standards/>
    <Faq/>
    <Accreditation/>
    <ViewCatalog/>
    <Footer/>
    <Copyright/>
    {/* <Video/> */}
    </>
  )
}

export default Landing