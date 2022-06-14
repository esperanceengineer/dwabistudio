import React from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <header id="header" className="tt-nav nav-border-bottom" >
        <div className="header-sticky dark-header">
            <div className="container">
            <div className="search-wrapper">
                <div className="search-trigger pull-right">
                <div className="search-btn"></div>
                <i className="fa fa-search"></i> </div>
                <i className="search-close fa fa-close"></i>
                <div className="search-form-wrapper">
                <form action="#" className="white-form">
                    <div className="input-field">
                    <input id="search" className="form-control" name="search" placeholder="Search..." type="text"/>
                    </div>
                    <button className="btn search-button vfx_waves_effect waves-light" type="submit"><i className="fa fa-search"></i></button>
                </form>
                </div>
            </div>
            <div id="header-menu" className="menuzord"> <a href="index.html" className="logo-brand"> <img className="retina" src="assets/img/dwabi-logo.svg" alt=""/> </a>
                <ul className="menuzord-menu pull-right">
                <li className="active"><Link to="/">Accueil</Link> </li>

                    <li className=""><a> Notre Studio</a>
                    <ul className="dropdown">
                        <li className="active"><Link to="/apropos"><i className="fa fa-angle-double-right"></i> A propos de nous</Link></li>
                        <li><Link to="/realisations"><i className="fa fa-angle-double-right"></i> Nos réalisations</Link></li>
                    </ul>
                    </li>

                <li><Link to="/services">Nos services</Link></li>
                <li><Link to="/actualite">Notre actualité</Link></li>
                <li><Link to="/contact">Contactez-nous</Link></li>

                <li><a href="">Suivez-nous</a>
                    <ul className="dropdown">
                    <li><a href="https://www.facebook.com/Dwabistudio" target="_blank"> Facebook</a></li>
                    <li><a href="https://twitter.com/DwabiStudio" target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/dwabistudio/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/dwabistudio/" target="_blank">Instagram</a></li>
                    </ul>

                </li>

                </ul>
            </div>
            </div>
        </div>
    </header>
    );
}

export default Navbar;