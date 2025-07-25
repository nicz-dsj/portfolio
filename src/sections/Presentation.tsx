import React, {useState} from 'react';
import photo from '../img/20250724_1800s51.jpg';
import './presentation.css';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

function Presentation(){
    return(
        <section id="presentation-section">
            <img src={photo}/>
            <h1 className="presentation-title">Tout d'abord parlons de moi</h1>
            <div className="presentation-text">
                <p>Né en 2003 à Ecully près de Lyon, j’ai toujours été fasciné par ce que l’on peut créer avec un ordinateur. Très jeune, j’ai découvert le web en bidoullant des pages, puis la 3D en explorant les univers visuels qui me faisaient rêver. Aujourd’hui encore, ce qui me motive c’est de donner vie à des idées, que ce soit à travers une interface web fluide ou une animation 3D qui parle d’elle-même.</p>
                <p>Après un bac technologique avec une option numérique, j’ai intégré le BUT Informatique de l’IUT Lyon 1, où j’ai découvert le développement web, les bases de données et un peu de modélisation 3D. Mes stages et mon alternance m’ont permis de mettre en pratique ces compétences sur des projets concrets, confirmant mon intérêt pour le web et les technologies visuelles.</p>
                <p>Après une première année de master en intelligence artificielle, j’ai choisi de me recentrer sur une voie plus technique et professionnalisante, dans mon domaine qui me tiens à coeur. J’ai ainsi été admis à l'ESGI de Lyon en alternance, une école reconnue dans le domaine de l’informatique, afin de poursuivre ma spécialisation dans le développement et les technologies web.</p>
                <a href="https://1drv.ms/b/c/d7ec73d02b734dfb/EWS3VNWp44NNqn9XbBG1568BWownetE1zLyJEB7tsLUINw?e=ZAHvTg"> {"-> Télécharger mon CV <-"} </a>
            </div>
            <div className="presentation-timeline">
                <h2>Mon parcours</h2>
                <MDBContainer fluid className="py-5">
                    <div className="main-timeline">
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2025 - 2027</h3>
                                    <p className="mb-0">
                                        Master en informatique à ESGI Lyon spécialité - Ingénierie du web - en alternance.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2024 - 2025</h3>
                                    <p className="mb-0">
                                        Master 1 Informatique à l'Université de Caen Normandie parcours - Intelligence Artificielle et Facteurs Humains -.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2023 - 2024</h3>
                                    <p className="mb-0">
                                        Année en alternance au sein de l'entreprise SDCI - Digicontact en tant que
                                        développeur web full-stack.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2023</h3>
                                    <p className="mb-0">
                                        Stage de fin de deuxième année de Bachelor Universitaire de Technologie (BUT) en
                                        Informatique au sein de l'association
                                        Femmes d'AURA en tant que développeur web.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2021 - 2024</h3>
                                    <p className="mb-0">
                                        BUT Informatique à l'IUT Lyon 1 parcours
                                        - Réalisation d'Applications - avec une troisième année en alternance.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2019 - 2021</h3>
                                    <p className="mb-0">
                                        Baccalauréat STI2D spécialité - Systèmes d'Information
                                        et Numérique - Mention Assez Bien
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2018 - 2019</h3>
                                    <p className="mb-0">
                                        Spécialité Informatique et Création Numériques (ICN) en classe de seconde, qui
                                        signe le début officiel de mon parcours.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2018</h3>
                                    <p className="mb-0">
                                        Stage de découverte en classe de troisième au sein de TCL SYTRAL, afin d'avoir
                                        une première approche du monde professionnel.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        </section>
    );
}

export default Presentation;
