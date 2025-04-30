import React, {useState} from 'react';
import photo from '../img/photo.png';
import './presentation.css';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

function Presentation(){
    return(
        <section id="presentation-section">
            <img src={photo}/>
            <h1 className="presentation-title">Présentation</h1>
            <div className="presentation-text">
                <p>Je m'appelle Nicolas, j'ai 21 ans et je suis actuellement étudiant en Informatique à l'Université Caen Normandie.
                </p>
                <p>Passionné depuis mon plus jeune âge par l'informatique et les nouvelles technologies, mon objectif
                    est de devenir ingénieur en intelligence artificielle. J'ai commencé mon aventure au lycée en
                    seconde avec la
                    spécialité Informatique et Création Numérique (ICN) dans lequel j'ai commencé à réaliser mes
                    premiers projets. Depuis mon envie de progresser ne m'a jamais quitté et
                    j'ai découvert au fil du temps de nouvelles technologies afin de pouvoir mener à bien mes
                    projets.</p>
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
                                    <h3>2024 - 2025</h3>
                                    <p className="mb-0">
                                        Master 1 Informatique à l'Université de Caen Normande, avec comme parcours Intelligence Artificielle et Facteurs Humains.
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
                                        Réalisation d'Applications.
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
