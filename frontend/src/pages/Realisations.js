import React from 'react';
import FooterAll from './FooterAll';

export default function Realisaions() {
    return (
        <div>
            <section className="utf_page_title utf_page_title-bg fixed-bg overlay dark-3 ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="white-text text-medium">Nos réalisations</h3>
                            <ul className="breadcrumb">
                                <li><a href="index.html">Notre studio</a></li>
                                <li className="active">Nos réalisations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="utf_section_padding">
                <div className="container">
                    <div className="text-center mb-50">
                        <p className="utf_section_sub">Prenez connaissance de nos réalisations
                            et faites-vous une idée du travail que
                            nous pouvons réaliser pour vous.</p>
                    </div>
                    <div className="portfolio-container">
                        <ul className="portfolio-filter brand-filter text-center">
                            <li className="active vfx_waves_effect waves-light" data-group="all">Tous</li>
                            <li className="vfx_waves_effect waves-light" data-group="websites">Photos</li>
                            <li className="vfx_waves_effect waves-light" data-group="Logo Design">Vidéos</li>
                            <li className="vfx_waves_effect waves-light" data-group="marketing">Design</li>
                            <li className="vfx_waves_effect waves-light" data-group="photography">Web</li>
                        </ul>
                        <div className="portfolio portfolio-with-title col-3 gutter">


                            <div className="portfolio-item" data-groups='["all", "websites", "Logo Design"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-1.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Logo Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "Logo Design", "marketing"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-2.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "websites", "Logo Design", "photography"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-3.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Material Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "websites", "photography", "marketing"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-4.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>UX Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "Logo Design", "photography"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-5.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "Logo Design", "marketing"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-6.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Logo Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "marketing", "photography"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-7.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Photography</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "websites"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-8.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item" data-groups='["all", "Logo Design", "marketing"]'>
                                <div className="card">
                                    <div className="card-image vfx_waves_effect waves-block waves-light"> <img className="activator" src="assets/img/portfolio/portfolio-9.jpg" alt="image"/> </div>
                                    <div className="card-content text-center"> <span className="card-title activator"><a href="#">Project Title</a></span>
                                        <p>Logo Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    );
}