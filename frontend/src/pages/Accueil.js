import React from 'react';
import Footer from './Footer';

function Accueil() {
    return (
        <div>
            <section className="banner-2 parallax-bg bg-fixed light-6 fullscreen-banner valign-wrapper" data-stellar-background-ratio="0.5">
                <div className="valign-cell">
                    <div className="container padding-top-50">
                        <div className="text-center">
                            <h1 className="tt-headline clip is-full-width slider-text-bold"> <span>Besoin </span> <span className="tt-words-wrapper"> <b className="is-visible">de créas ?</b> <b>d'idées ?</b> </span> </h1>
                            <span className="sub-intro lead text-regular white-text">Vous êtes au bon endroit !<br/>
                                N'hesitez pas...</span> <a href="nous-contacter.html" className="btn blue vfx_waves_effect waves-light">Travaillez avec nous</a> </div>
                    </div>
                </div>
            </section>
            <section className="utf_feature_area">
                <div className="container">
                    <div className="row fix_m">
                        <div className="col-xs-12 col-sm-6 col-md-3 fix_p">
                            <div className="utf_single_feature text-center blue_col_one"> <i className="material-icons colored">photo</i>
                                <h4>Photographie</h4>
                                <div className="utf_single_cap">
                                    <p>Donnez de la valeur à vos images</p>
                                    <a className="th_bt btn vfx_waves_effect" href="#">Découvrir</a> </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 fix_p">
                            <div className="utf_single_feature text-center blue_col_two"><i className="material-icons colored">theaters</i>
                                <h4>Vidéographie</h4>
                                <div className="utf_single_cap">
                                    <p>C'est toujours mieux avec une vidéo</p>
                                    <a className="th_bt btn vfx_waves_effect" href="#">Découvrir</a> </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 fix_p">
                            <div className="utf_single_feature text-center blue_col_three"> <i className="material-icons colored"> color_lens</i>
                                <h4>infographie</h4>
                                <div className="utf_single_cap">
                                    <p>A vos marques, prêts, créons !</p>
                                    <a className="th_bt btn vfx_waves_effect" href="#">Découvrir</a> </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 fix_p">
                            <div className="utf_single_feature text-center blue_col_four"> <i className="material-icons colored"> settings_ethernet</i>
                                <h4>Web</h4>
                                <div className="utf_single_cap">
                                    <p>S’assurer une visibilité sur le web </p>
                                    <a className="th_bt btn vfx_waves_effect" href="#">Découvrir</a> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="utf_section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 device_img"> <img src="assets/img/mockup/device.png" className="img-responsive" alt="Image"/> </div>
                        <div className="col-md-6">
                        <h2 className="tt-headline clip is-full-width slider-text-bold1 title-text-shadow"> <span>Votre lien </span> <span className="tt-words-wrapper"> <b className="is-visible">créatif...</b> <b>créatif...</b> <b>créatif...</b>  </span> </h2>

                        <p>
                            Nous sommes une agence de communication spécialisée  dans  la  fourniture  de  contenu  numérique.
                            Notre ambition est d’être un révélateur de créativité
                            pour  les  entreprises  et  les  institutions  sur  le  canal
                            digital afin de vous assurer une transition vers le numérique avec du contenu original, créatif et propre
                            à votre structure.
                        </p>
                        <p>
                            Nos activités sont la Formation, la Photographie, la
                            Vidéographie,  le  Web,  l’infographie  et  le  consulting.
                            Nous vous accompagnons chaque jour dans la réalisation de vos projets en vous fournissant du
                            contenu  numérique  de  qualité,  en  assurant  un  accompagnement dans votre transition numérique et
                            en réalisant vos supports physiques de communication.
                        </p>
                        <a href="a-propos.html" className="btn blue vfx_waves_effect waves-light">Découvrir</a>
                    </div>
                </div>
        </div>
</section >
<section className="utf_section_padding skill-block-bg">
  <div className="container">
    <div className="text-center mb-50">
      <h2 className="utf_section_title">Nos réalisations</h2>
      <p className="utf_section_sub">Prenez connaissance de nos réalisations
et faites-vous une idée du travail que nous pouvons réaliser pour vous.</p>
    </div>
    <div className="portfolio-container text-center">
      <ul className="portfolio-filter brand-filter">
        <li className="active vfx_waves_effect waves-light" data-group="all">Tous</li>
        <li className="vfx_waves_effect waves-light" data-group="websites">Photos</li>
        <li className="vfx_waves_effect waves-light" data-group="Logo Design">Vidéos</li>
        <li className="vfx_waves_effect waves-light" data-group="marketing">Web</li>
        <li className="vfx_waves_effect waves-light" data-group="photography">Infographies</li>
      </ul>
      <div className="portfolio col-4 gutter">

        
        <div className="portfolio-item" data-groups='["all", "Logo Design", "photography"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-1.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-1.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "marketing", "websites"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-2.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-2.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "photography", "Logo Design"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-3.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-3.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "Logo Design"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-4.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-4.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "photography", "marketing"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-5.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-5.jpg" className="tt-lightbox" title=""> <i className="fa fa-search"></i> </a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "websites",  "marketing"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-6.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-6.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "websites", "photography"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-7.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-7.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item" data-groups='["all", "websites", "marketing"]'>
          <div className="portfolio-wrapper">
            <div className="thumb">
              <div className="bg-overlay"></div>
              <img src="assets/img/portfolio/portfolio-8.jpg" alt=""/>
              <div className="portfolio-intro">
                <div className="action-btn"> <a href="assets/img/portfolio/portfolio-8.jpg" className="tt-lightbox" title=""><i className="fa fa-search"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="utf_section_padding">
  <div className="container">
    <div className="text-center mb-60">
      <p className="utf_section_sub">Faites-nous confiance comme ils l’ont fait.</p>
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
<Footer/>
</div >
    );
}

export default Accueil;