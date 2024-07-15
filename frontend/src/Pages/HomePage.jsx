import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Banner from '../Components/Home/Banner'
import Footer from '../Components/Footer/Footer'
import CommonFooter from '../Components/Footer/CommonFooter'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Footer/>
        {/* <CommonFooter/> */}
    </div>
  )
}

export default HomePage