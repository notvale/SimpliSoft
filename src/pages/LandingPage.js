import React from 'react';
import HeaderLanding from '../components/HeaderLanding';
import SeccionOne from '../components/SeccionOne';
import SeccionTwo from '../components/SeccionTwo';
import SeccionThree from '../components/SeccionThree';
import SeccionFour from '../components/SeccionFour';
import Footer from '../components/Footer';

import '../css/style.css'


const LandingPage = () => {
    return (
        <div>
            <HeaderLanding/>
            <main>
                <SeccionOne/>
                <SeccionTwo/>
                <SeccionThree/>
                <SeccionFour/>
                <Footer/>
            </main>

        </div>
    )
}

export default LandingPage; 