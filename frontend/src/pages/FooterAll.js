import React from 'react';

function FooterAll() {
    return (
        <div>
            <footer className="footer footer-one utf_footer_area">
                <div className="utf_primary_footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 widget clearfix">
                                <h2 className="white-text">About Us</h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />
                                    <a href="about.html"><i className="fa fa-angle-double-right"></i> Read More</a> </p>
                            </div>
                            <div className="col-md-3 widget">
                                <h2 className="white-text">Quick Links</h2>
                                <ul className="footer-list">
                                    <li><a href="a-propos.html"><i className="fa fa-angle-double-right"></i> About Us</a></li>
                                    <li><a href="nos-services.html"><i className="fa fa-angle-double-right"></i> Our Services</a></li>
                                    <li><a href="blog-single-fullwidth.html"><i className="fa fa-angle-double-right"></i> Latest Blog</a></li>
                                    <li><a href="portfolio-2.html"><i className="fa fa-angle-double-right"></i> Our Projects</a></li>
                                    <li><a href="nous-contacter.html"><i className="fa fa-angle-double-right"></i> Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 widget">
                                <h2 className="white-text">News Letter</h2>
                                <form>
                                    <div className="form-group clearfix">
                                        <input type="email" className="form-control" id="subscribe" placeholder="Email Address"/>
                                            <button type="submit" className="tt-animate ltr"><i className="fa fa-paper-plane"></i></button>
                                    </div>
                                </form>
                                <h2 className="white-text">Social Media</h2>zzzzzzzz
                                <ul className="social-link tt-animate ltr">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="utf_secondary_footer">
                    <div className="container"> <span className="copy-text">Copyright © 2018 All Rights Reserved.</span> </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterAll;