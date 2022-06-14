import React from 'react';
import FooterAll from './FooterAll';

export default function Services() {
    return (
        <div>
            <section className="utf_page_title utf_page_title-bg fixed-bg overlay dark-3 ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="white-text text-bold">Services</h3>
                            <ul className="breadcrumb">
                                <li><a href="index.html">Accueil</a></li>
                                <li className="active">Nos services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="utf_section_padding banner-6 parallax-bg bg-fixed overlay light-8">
                <div className="container">
                    <div className="text-center mb-60">

                        <p className="utf_section_sub">Prenez le temps de consulter les services
                            que nous vous proposons</p>
                    </div>

                    <div className="row equal-height-row icon_box2_hex">
                        <div className="col-md-6 col-sm-6 mb-30">
                            <div className="utf_featured_item border-box brand-hover equal-height-column">
                                <div className="icon_circle">
                                    <div className="icon_sub_ctn"><i className="material-icons">photographie</i></div>
                                </div>
                                <div className="utf_desc">
                                    <h2>Photo</h2>
                                    <p>Donnez de la valeur à vos images.</p>
                                    <a href="#" className="btn blue vfx_waves_effect mt-20">Découvrir</a> </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-30">
                            <div className="utf_featured_item border-box brand-hover equal-height-column">
                                <div className="icon_circle">
                                    <div className="icon_sub_ctn"><i className="material-icons">theaters</i></div>
                                </div>
                                <div className="utf_desc">
                                    <h2>vidéo</h2>
                                    <p>C'est toujours mieux avec une vidéo.</p>
                                    <a href="#" className="btn blue vfx_waves_effect mt-20">Découvrir</a> </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 mb-30">
                            <div className="utf_featured_item border-box brand-hover equal-height-column">
                                <div className="icon_circle">
                                    <div className="icon_sub_ctn"><i className="material-icons">brush</i></div>
                                </div>
                                <div className="utf_desc">
                                    <h2>Graphisme</h2>
                                    <p>A vos marques, prêts, créons !</p>
                                    <a href="#" className="btn blue vfx_waves_effect mt-20">Découvrir</a> </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="utf_featured_item border-box brand-hover equal-height-column">
                                <div className="icon_circle">
                                    <div className="icon_sub_ctn"><i className="material-icons">settings_ethernet</i></div>
                                </div>
                                <div className="utf_desc">
                                    <h2>Web</h2>
                                    <p>Soyez visibles sur le web.</p>
                                    <a href="#" className="btn blue vfx_waves_effect mt-20">Découvrir</a> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="banner-8 bg-fixed parallax-bg utf_section_padding overlay light-7" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="text-center mb-60">
                        <h2 className="utf_section_title">Faites-nous confiance</h2>
                        <p className="utf_section_sub">Vous serez en bonne compagnie avec Dwabi <span>&#128519;</span></p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="client-testimonial" className="carousel slide carousel-testimonial text-center utf_gray_bg" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <div className="avatar circle-thumb-list-img"> <img src="assets/img/client-thumb/1.png" alt="Customer Thumb"/> </div>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis</p>
                                            <div className="testimonial-meta brand-color"> Jhon Doe<span> ~ Web Designer</span> </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="avatar circle-thumb-list-img"> <img src="assets/img/client-thumb/2.png" alt="Customer Thumb"/> </div>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis</p>
                                            <div className="testimonial-meta brand-color"> Jhon Doe<span> ~ Web Designer</span> </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="avatar circle-thumb-list-img"> <img src="assets/img/client-thumb/3.png" alt="Customer Thumb"/> </div>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt commodi blanditiis nisi accusamus omnis</p>
                                            <div className="testimonial-meta brand-color"> Jhon Doe<span> ~ Web Designer</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#client-testimonial" role="button" data-slide="prev"> <i className="fa fa-arrow-left"></i> <span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#client-testimonial" role="button" data-slide="next"> <i className="fa fa-arrow-right"></i> <span className="sr-only">Next</span> </a> </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll/>
        </div>
    );
}