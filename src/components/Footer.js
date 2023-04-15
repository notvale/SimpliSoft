import React from "react";
import "../css/style.css"
import logoVector from '../images/Assets/LogovectorLogoNav.svg';

const Footer = () => {

    return (
        <footer class="footer">
            <div class="footer-newsletter" id="subscribe">
                <img src={logoVector} alt="logo-Simplisoft" />
            </div>
            <p class="copyright">© Copyright. All rights reserved.</p>
        </footer>

    ); //fin
} // fin

export default Footer;