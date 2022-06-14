import React from 'react';
import FooterAll from './FooterAll';

export default function Apropos() {
    return (
        <div>
            <section className="utf_page_title utf_page_title-bg fixed-bg overlay dark-3 ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="white-text text-medium">A propos de nous</h3>
                            <ul className="breadcrumb">
                                <li><a href="index.html">Notre studio</a></li>
                                <li className="active">A propos de nous</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="utf_section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="font-30 text-medium mb-30 title-text-shadow">Qui sommes-nous ?</h2>
                            <p>
                                Créée en <b>2016, Bunny Studio</b> proposait la réalisation et la production des
                                vidéos et photos aux entreprises et aux particuliers. La vision de la créatrice
                                évoluant au fil des années, la start-up va s’agrandir et proposer d’autres services
                                créatifs spécifiquement adressés aux entreprises.
                            </p>

                            <p>
                                Ainsi, <b>Bunny Studio</b> va muter en <b>juillet 2021</b> en <b>Dwabi Studio</b>, <b >agence
                                    de communication spécialisée dans la fourniture de contenu numérique.</b>
                            </p>

                            <p style={{textAlign: 'justify'}}>
                                <b>Dwabi</b> est un nom qui signifie en <b>dialecte  Punu  porte  panier</b>.  Fait  de
                                cordes  tissées,  cet  objet  est  indispensable  pour  porter  des  provisions
                                placées dans un panier ou tout autre contenant pouvant être porté par les
                                Hommes.  Ainsi,  Dwabi  a  toujours  été  pour  les  populations  rurales  du  Gabon, <b>l’interface, le trait d’union, le lien entre l’Homme et l’objet
                                    transporté.</b>
                            </p>

                            <p>
                                Dwabi est donc <b>la métaphore du soutien : soutien à la création et au développement;
                                    un soutien durable à la fois technique, artistique et pédagogique.</b> C’est aussi un vecteur
                                essentiel de transmission et d’enseignement.
                                Espace dédié à la créativité, Dwabi Studio révèle le meilleur de votre idée
                                en vous fournissant un contenu numérique de qualité pour porter haut
                                votre projet.
                            </p>


                        </div>
                        <div className="col-md-5"> <img src="assets/img/mockup/device.png" className="img-responsive " alt="Image"/> </div>
                    </div>
                </div>
            </section>
            <section className="utf_section_padding banner-10 bg-fixed parallax-bg overlay light-8" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="text-center mb-60">
                        <h2 className="utf_section_title">Notre équipe </h2>
                        <p className="utf_section_sub">Nous   vous   présentons   les membres de l’équipe Dwabi Studio.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="team-wrapper text-center">
                                <div className="team-img"> <a href="#"><img src="assets/img/team/team-1.jpg" className="img-responsive" alt="Image"/></a> </div>
                                <div className="team-title">
                                    <h3><a href="#">Bunny <br/>Claude Massassa</a></h3>
                                    <span>Claude Massassa</span>
                                </div>
                                <ul className="team-social-links list-inline">
                                    <li><a href="equipe-bunny.html" target="_blank"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/massassa-bunny-claude-95712215a/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-wrapper text-center">
                                <div className="team-img"> <a href="#"><img src="assets/img/team/team-2.jpg" className="img-responsive" alt="Image"/></a> </div>
                                <div className="team-title">
                                    <h3><a href="#">EKOURGHE <br/>  Chriselda
                                        Chancia</a></h3>
                                    <span> Fullstack Développeur</span> </div>
                                <ul className="team-social-links list-inline">
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-wrapper text-center">
                                <div className="team-img"> <a href="#"><img src="assets/img/team/team-3.jpg" className="img-responsive" alt="Image"/></a> </div>
                                <div className="team-title">
                                    <h3><a href="#">Alan <br/> Kouma</a></h3>
                                    <span>Community Manager</span> </div>
                                <ul className="team-social-links list-inline">
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-wrapper text-center">
                                <div className="team-img"> <a href="#"><img src="assets/img/team/team-4.jpg" className="img-responsive" alt="Image"/></a> </div>
                                <div className="team-title">
                                    <h3><a href="#">Mbo <br/> Obiang Styves </a></h3>
                                    <span>Assistant Community Manager</span> </div>
                                <ul className="team-social-links list-inline">
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="utf_section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="font-30 text-bold mb-30">Découvrez Dwabi</h2>
                            <div className="panel-group feature-accordion brand-accordion icon angle-icon" id="accordion-one">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion-one" href="#collapse-one">A propos de nous</a> </h3>
                                    </div>
                                    <div id="collapse-one" className="panel-collapse collapse in">
                                        <div className="panel-body">Nous sommes une agence de communication spécialisée
                                            dans  la  fourniture  de  contenu  numérique.
                                            Notre ambition est d’être un révélateur de créativité
                                            pour  les  entreprises  et  les  institutions  sur  le  canal
                                            digital afin de vous assurer une transition vers le numérique avec du contenu original, créatif et propre
                                            à votre structure</div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><a className="collapsed" data-toggle="collapse" data-parent="#accordion-one" href="#collapse-two">Notre mission</a></h3>
                                    </div>
                                    <div id="collapse-two" className="panel-collapse collapse">
                                        <div className="panel-body">Fournir des contenus uniques aux entreprises et former les jeunes dans les métiers du numérique.</div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><a className="collapsed" data-toggle="collapse" data-parent="#accordion-one" href="#collapse-three"> Nos valeurs</a></h3>
                                    </div>
                                    <div id="collapse-three" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Nous vous invitons à connaître nos cinq valeurs clés :<br/>
                                                <b>1- Détermination :</b><br/>
                                                    C’est notre résolution à mener de bout en bout les projets vers l’excellence<br/>
                                                        <b>2- Créativité :</b><br/>
                                                            Notre capacité à apporter des concepts innovants.<br/>
                                                                <b>3- 	Culture  :</b><br/>
                                                                    Notre nature expansive, créatrice et innée<br/>
                                                                        <b>4- Passion :</b><br/>
                                                                            C’est le fort amour, l’énergie que nous mettons en œuvre pour la réalisation de chaque projet.<br/>
                                                                                <b>5-	Esprit d’équipe :</b><br/>
                                                                                    Une façon de développer nos qualités humaines, professionnelle et surtout l’organisation de l’ensemble de nos projets.<br/>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="panel panel-default">
                                                                                <div className="panel-heading">
                                                                                    <h3 className="panel-title"><a className="collapsed" data-toggle="collapse" data-parent="#accordion-one" href="#collapse-four"> Notre démarche artistique </a> </h3>
                                                                                </div>
                                                                                <div id="collapse-four" className="panel-collapse collapse">
                                                                                    <div className="panel-body">
                                                                                        Notre créativité est collective, notre passion est de vous proposer du contenu digital
                                                                                        reflétant vos idées et adapté à votre environnement. Notre liberté artistique
                                                                                        continue de rêver chaque jour depuis 5 ans à des créations qui sauront transmettre
                                                                                        des émotions fortes à vos cibles tout en respectant les codes de votre secteur.
                                                                                        Cette démarche va bien au-delà du support et vous offre ainsi un éventail de possibilités,
                                                                                        que ce soit sur vos écran ou sur le papier, pour partager votre passion avec
                                                                                        vos clients.

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <img src="assets/img/mockup/device2.png" className="img-responsive " alt="Image"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="banner-9 bg-fixed parallax-bg utf_section_padding overlay light-8">
                                                            <div className="container">
                                                                <div className="text-center mb-60">
                                                                    <h2 className="utf_section_title">Faites-nous confiance comme ils l’ont fait.</h2>
                                                                    <p className="utf_section_sub"></p>
                                                                </div>
                                                                <div className="clients-grid grid-gutter">
                                                                    <div className="row">
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/01.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/02.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/03.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/04.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/05.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/06.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/07.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/08.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/09.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/10.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/11.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-4">
                                                                            <div className="border-box"> <a href="#"> <img src="assets/img/client-logo/12.png" alt="clients"/> </a> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <FooterAll />
                                                    </div>
                                                    );
}