import React from 'react';

function Footer() {
    return (
        <footer className="footer footer-one utf_footer_area">
            <div className="utf_primary_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 widget clearfix">
                            <h2 className="white-text"><span style={{color: '#ff7200'}}>Votre </span>studio</h2>
                            <p>
                                Nous créons pour vous un contenu digital créatif propre à votre entreprise afin de vous assurer un positionnement
                                et une transition digitale uniques. </p>

                        </div>
                        <div className="col-md-4 widget">
                            <h2 className="white-text"><span style={{color: '#ff7200'}}>Lien</span> utile</h2>
                            <ul className="footer-list">
                                <li><a href="cgv.html"><i className="fa fa-angle-double-right"></i> CGV</a></li>
                                <li><a href="mentions-legales.html"><i className="fa fa-angle-double-right"></i> Mentions légales</a></li>

                            </ul>
                        </div>


                        <div className="col-md-4 widget">
                            <h2 className="white-text">Espace <span style={{color: '#ff7200'}}>créatif</span></h2>

                            <p>Suivez-nous sur nos réseaux sociaux</p>
                            <ul className="social-link tt-animate ltr">
                                <li><a href="https://www.facebook.com/Dwabistudio" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/DwabiStudio" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/dwabistudio/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/dwabistudio/" target="_blank"><i className="fa fa-instagram"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="utf_secondary_footer">
                <div className="container"> <span className="copy-text"> © 2022 Dwabi Studio | Tous droits reservés.</span> </div>
            </div>
        </footer>
    );
}

export default Footer;