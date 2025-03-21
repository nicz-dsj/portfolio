import React, {useState} from 'react';
import photo from '../img/photo.png';
import './presentation.css';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

function Presentation(){
    return(
        <section id="presentation-section">
            <img src={photo}/>
            <h1 className="presentation-title">Présentation</h1>
            <h2>Qui je suis ?</h2>
            <div className="presentation-text">
                <p>Je m'appelle Nicolas, j'ai 21 ans et je suis actuellement en première année de Master 1 Intelligence Artificielle
                    et Facteurs Humains à l'Université de Caen Normandie.
                </p>
                <p>Passionné depuis mon plus jeune âge par l'informatique et les nouvelles technologies, mon objectif
                    est de devenir ingénieur en intelligence artificielle. J'ai commencé mon aventure au lycée en
                    seconde avec la
                    spécialité Informatique et Création Numérique (ICN) dans lequel j'ai commencé à réaliser mes
                    premiers projets. Depuis mon envie de progresser ne m'a jamais quitté et
                    j'ai découvert au fil du temps de nouvelles technologies afin de pouvoir mener à bien mes
                    projets.</p>
                <p>Actuellement en cours de réorientation, je souhaite poursuivre mon parcours dans le domaine de la Data ou de la Cybersécurité
                en intégrant une formation plus professionnalisante en cycle ingénieur afin d'approfondir mes compétences et connaissances.</p>
            </div>
            <div className="presentation-timeline">
                <h2>Mon parcours</h2>
                <MDBContainer fluid className="py-5">
                    <div className="main-timeline">
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
                                        Bachelor Universitaire de Technologie (BUT) en Informatique à l'IUT Lyon 1 à
                                        Villeurbanne site Doua pour une
                                        durée de 3 ans. Dès mon entrée en deuxième année, j'ai choisi la spécialité
                                        Réalisation d'Applications et je compte
                                        choisir cette spécialité pour ma troisième année.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2019 - 2021</h3>
                                    <p className="mb-0">
                                        Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable
                                        (STI2D) spécialité Systèmes d'Information
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
                                        Spécialité Informatique et Création Numériques (ICN) en classe de seconde, ce
                                        qui m'a donné l'envie de poursuivre dans
                                        ce domaine.
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
