import React, {useState} from 'react';
import './presentation.css';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

function Presentation(){
    const [ visible, setVisible ] = useState(false);

    function show(){
        if (window.scrollY >= 330){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }
    window.addEventListener('scroll', show);
    window.addEventListener('scroll', function (){
        console.log(window.scrollY)
    });

    return(
        <section id="presentation-section">
            <h1 className={visible ? 'presentation-title visible' : 'presentation-title'}>Présentation</h1>
            <div className="presentation-text">
                <h2>Quel est mon objectif ?</h2>
                <p>Passionné depuis mon plus jeune âge par l'informatique et les nouvelles technologies, mon objectif est de devenir développeur web confirmé. J'ai commencé mon aventure au lycée en seconde avec la
                    spécialité Informatique et Création Numérique (ICN) dans lequel j'ai commencé à réaliser mes premiers projets. Depuis mon envie de progresser ne m'a jamais quitté et
                    j'ai découvert au fil du temps de nouvelles technologies afin de pouvoir mener à bien mes projets.</p>
                <button>Mon CV</button>
            </div>
            <div className="presentation-timeline">
                <h2>Mon parcours</h2>
                <MDBContainer fluid className="py-5" >
                    <div className="main-timeline">
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2023</h3>
                                    <p className="mb-0">
                                        Stage de fin de deuxième année de Bachelor Universitaire de Technologie (BUT) en Informatique au sein de l'association
                                        Femmes d'AURA en tant que développeur web.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2021 - 2024</h3>
                                    <p className="mb-0">
                                        Bachelor Universitaire de Technologie (BUT) en Informatique à l'IUT Lyon 1 à Villeurbanne site Doua pour une
                                        durée de 3 ans.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2019 - 2021</h3>
                                    <p className="mb-0">
                                        Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable (STI2D) spécialité Systèmes d'Information
                                        et Numérique - Mention Assez Bien
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2018 - 2019</h3>
                                    <p className="mb-0">
                                        Spécialité Informatique et Création Numériques (ICN) en classe de seconde, ce qui m'a donné l'envie de poursuivre dans
                                        ce domaine.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3>2018</h3>
                                    <p className="mb-0">
                                        Stage de découverte en classe de troisième au sein de TCL SYTRAL, afin d'avoir une première approche du monde professionnel.
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