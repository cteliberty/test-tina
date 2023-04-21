import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

const HomePage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    const back = document.querySelector('.uam_back');

    let optionScroll = {
      el: document.querySelector('[data-scroll-container]'),
    };

    optionScroll = {
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
      tablet: { smooth: true },
      smartphone: { smooth: true },
    };

    const scroll = new LocomotiveScroll(optionScroll);
    new ResizeObserver(
      () => scroll.update()).observe(document.querySelector('[data-scroll-container]')
    );

    // Back to top
    if (back && back) {
      const backHide = 'uam_back-hide';

      scroll.on('call', (value:string, way:string) => {
        if (value === 'toggleBackToTop') {
          if (way === 'enter') {
            back.classList.add(backHide);
          } else {
            back.classList.remove(backHide);
          }
        }
      });
    }

    return () => {
      scroll.destroy();
    }
  }, []);

  return (
    <>

      <div className="uam_intro" data-scroll-section>
        <a className="uam_logo" href="index.html">
          <i className="uam_icon_logo" data-scroll data-scroll-speed="1"></i>
        </a>
        <div className="uam_intro_footer uam_wrapper">
          <address>
            <h1>un autre monde</h1>
            <p>108 avenue du lac Léman</p>
            <p>Savoie Technolac - Bat. Andromède</p>
            <p>73372 Le Bourget-du-Lac</p>
          </address>
          <a className="uam_link uam_link_arrow" href="#uam-project" data-scroll-to data-no-swup>scroll <i className="uam_icon_arrow-long"></i></a>
        </div>
      </div>


      <div id="uam-project" className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-mbnr_light.png" alt="Header La tête dans les nuages" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/mbnr.html" className="uam_link" data-custom-link="true" data-link="Découvrir">La tête dans les nuages</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/mbnr/logo-mbnr_light.png" alt="La tête dans les nuages" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Refonte du site internet, Analyse UI & UX</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Adobe XD, Illustrator, Photoshop, CSS5, React JS, Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/mbnr.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-scf_light.png" alt="Header Salut, ça farte ?" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/scf.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Salut, ça farte ?</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <p>Domaines Skiables</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Refonte du site internet, Analyse UI & UX</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Adobe XD, Illustrator, Photoshop, CSS5, React JS, Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/scf.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-praloup.png" alt="Header Skieurs en série" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/praloup.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Skieurs en série</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/praloup/logo-praloup_light.png" alt="Skieurs en série" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Branding, identité, logo, charte graphique et déclinaison sur l’ensemble des supports web (site de vente en ligne) et print (PLV, point de vente, cartes de visite...) campagnes de communication auprès des milléniales</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Figma, Illustrator, CSS5, React JS, Illustrator, Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/praloup.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-touch_light.png" alt="Header Retouch complète" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/touch.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Retouch complète</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/touch/logo-touch_light.png" alt="Retouch complète" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Refonte du parcours utilisateur et du design d’interface des bornes interactives Touch</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Mise en place d’une statégie UX : data analyse, service safari, interviews, shadowing, journey map, benchmark, diagramme d’affinités, brainstorming, wireframes & prototypes sur Figma</p>
                </li>
              </ul>

              <a href="/touch.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-wwp.png" alt="Header World War Press" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/wwp.html" className="uam_link" data-custom-link="true" data-link="Découvrir">World War Press</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <p>Domaines skiables, associations, offices du tourisme ou ESN dans le domaine des sports d’hiver</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Analyse UI & UX, web-design, refonte des sites internet</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Figma, Illustrator, CSS5, React JS, Wordpress, php, intégration du Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/wwp.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-rs.png" alt="Header Réseaux Sociaux" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/rs.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Réseaux Sociaux</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/rs/logo-rs_light.png" alt="Les stations Nice Côte d'Azur" />
                  <StaticImage src="../images/projects/praloup/logo-praloup_light.png" alt="PraLoup" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Concept de communication, étude de l’audience potentielle, plan média, programmation des campagnes, analyse des retombées</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Facebook & Instagram, Figma & Plugin SUPA pour l’animation vidéo</p>
                </li>
              </ul>

              <a href="/rs.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-decathlon.png" alt="Header À fond la forme !" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/decathlon.html" className="uam_link" data-custom-link="true" data-link="Découvrir">À fond la forme !</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/decathlon/logo-decathlon_light.png" alt="À fond la forme !" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Logo, utilisation du design system de la marque, conception et développement de l’application mobile, création d’une landing page, packaging, PLV</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Figma, Illustrator, CSS5, React JS, Illustrator, Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/decathlon.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-dune.png" alt="Header Vers l'infini & l\'eau de là" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/dune.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Vers l'infini & l\'eau de là</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/dune/logo-dune.png" alt="Vers l'infini & l\'eau de là" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Conception du design system, maquettage et développement d’un écosystème complet de vente en ligne multi destinations</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Adobe XD, illustrator, Sylius e-commerce, CMS Strapi, API Back Dive, API banque Lyra, CSS5, React JS, Apollo Serveur, Guest Suite Review, Sengrid</p>
                </li>
              </ul>

              <a href="/dune.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-dsf.png" alt="Header Aller plus haut" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/dsf.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Aller plus haut</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/dsf/logo-dsf_light.png" alt="Aller plus haut" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Création du site évènementiel pour le Congrès annuel des Domaines Skiables de France</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Figma, Illustrator, CSS5</p>
                </li>
              </ul>

              <a href="/dsf.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-skipower.png" alt="Header T'as le power !" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/skipower.html" className="uam_link" data-custom-link="true" data-link="Découvrir">T'as le power !</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/skipower/logo-skipower_light.png" alt="T'as le power !" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Définition d’une nouvelle direction artistique, refonte des sites de vente en ligne et mise en place de co-branding</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Fijam, Figma, Illustrator, Photoshop, CSS5, Wordpress, Saas e-Liberty</p>
                </li>
              </ul>

              <a href="/skipower.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_projectItem" data-scroll-section>
        <div className="uam_projectItem_inner">
          <div className="uam_wrapper">
            <div className="uam_projectItem_bg">
              <StaticImage src="../images/headers/header-data.png" alt="Header Abraca-data !" />
            </div>

            <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
              <a href="/data.html" className="uam_link" data-custom-link="true" data-link="Découvrir">Abraca-data !</a>
            </h2>

            <div className="uam_headerExcerpt">
              <ul>
                <li>
                  <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                  <StaticImage src="../images/projects/data/logo-data_light.png" alt="Abraca-data !" />
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                  <p>Est turpis mauris viverra nulla. Nisl quis elementum ullamcorper interdum leo cursus est proin. Pulvinar habitasse et</p>
                </li>
                <li>
                  <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                  <p>Quam scelerisque fames tempus fusce purus imperdiet leo sed pretium. In morbi pretium amet volutpat</p>
                </li>
              </ul>

              <a href="/data.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
                <span>Découvrir le projet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>