import React from 'react'
import Records from '../components/Records';
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';
const RecordsPage = () => {
    return (
        <>
        <ScrollToTop/>
            <Records/>
            <Footer/>
        </>
    )
}

export default RecordsPage
