import React from 'react';
import FooterAll from './FooterAll';

function Contact() {
    return (
        <div>
            <section className="utf_page_title utf_page_title-bg fixed-bg overlay dark-3 ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="white-text text-medium">Nous contacter</h3>
                            <ul className="breadcrumb">
                                <li><a href="index.html">Accueil</a></li>
                                <li className="active">Nous contacter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="utf_section_padding chart-wrapper skill-block-bg">
                <div className="container">
                    <div className="text-center mb-30">
                        <h2 className="utf_section_title">Informations de contact</h2>
                        <p className="utf_section_sub">Nous pouvons travailler ensemble. N'hésitez pas de nous contacter.
                            Vous pouvez vous rendre dans notre studio pour vos séances de shooting</p>
                    </div>
                    <div className="row">
                        <div className="mr-top-30">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <div className="media media-iconic contact_dtl_block">
                                    <div className="media-body">
                                        <div className="lt-co-icon"> <img src="assets/img/ic-loc.svg" alt="ic-loc"/> </div>
                                        <div className="lt-co-blok-text">
                                            <div className="lt-co-title">Siège Social</div>
                                            <hr className="lt-co-yellow-hr"/>
                                                <p>1er étage, Immeuble Renovation<br/>
                                                    BP: 4209  - Libreville, Gabon
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <div className="media media-iconic contact_dtl_block">
                                    <div className="media-body">
                                        <div className="lt-co-icon"> <img src="assets/img/ic-call.svg" alt="ic-call"/> </div>
                                        <div className="lt-co-blok-text">
                                            <div className="lt-co-title">Contacts</div>
                                            <hr className="lt-co-green-hr"/>
                                                <p><b>Tel</b> : +241 60 05 14 99<br/>
                                                    <b>E-Mail</b> :- <a href="mailto:contact@dwabi.studio">contact@dwabi.studio</a><br/>
                                                    </p>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                        <div className="media media-iconic contact_dtl_block">
                                            <div className="media-body">
                                                <div className="lt-co-icon"> <img src="assets/img/ic-time.svg" alt="ic-time"/> </div>
                                                <div className="lt-co-blok-text">
                                                    <div className="lt-co-title">Nos horaires de service</div>
                                                    <hr className="lt-bg-blue-hr"/>
                                                        <p> <b>Lun</b> - <b>Ven</b> :  8:30 - 16:30<br/>
                                                            <b>Sam</b> : 8:30 - 13:30</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="utf_contact_padding">
                        <div className="container">
                            <div className="text-center mb-30">
                                <h2 className="utf_section_title">Vous avez besoin d'aide ?</h2>
                                <p className="utf_section_sub">Notre service client est à votre disposition par le biais de ce formulaire!<br/> Ecrivez et nous vous répondons.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <form name="contact-form" id="contactForm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-field">
                                                    <input type="text" name="name" required className="validate" id="name"/>
                                                        <label >Nom <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-field">
                                                    <label>E-mail <span>*</span></label>
                                                    <input id="email" type="email" required name="email" className="validate"/>
                                                        <label data-error="wrong" data-success="right">E-mail</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-field">
                                                    <input id="phone" type="tel" required name="phone" className="validate"/>
                                                        <label >Numéro de téléphone<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-field">
                                                    <input id="website" type="text" name="website" className="validate"/>
                                                        <label>Votre site web</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-field">
                                            <textarea name="message" id="message" className="materialize-textarea"></textarea>
                                            <label>Message</label>
                                        </div>
                                        <button type="submit" name="submit" className="vfx_waves_effect waves-light btn submit-button blue mt-30">Soumettre</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterAll/>
        </div>
    );
}

export default Contact;