import React from 'react';
import {Carousel} from "react-bootstrap";
import './projects.css';
import travelmate from '../img/travelmate.jpg';
import trouvetonplat from '../img/trouvetonplat.png';
import snake from '../img/snake.png';
import graphmap from '../img/graphmap.png';
import gestion from '../img/gestion.png';
import pres from '../img/pres.png';

function Projects(){
    return(
        <section id="projects-section">
            <h1>Mes projets</h1>
            <div className="projects-list">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={travelmate}/>
                        <Carousel.Caption>
                            <h3>Travelmate</h3>
                            <p>2023</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trouvetonplat}/>
                        <Carousel.Caption>
                            <h3>Trouve ton plat</h3>
                            <p>2023</p>
                            <a href='https://trouvetonplat.alwaysdata.net'>Lien du site web</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={snake}/>
                        <Carousel.Caption>
                            <h3>Snake</h3>
                            <p>2022</p>
                            <a href='https://nicz-dsj.github.io/projet-js-snake/public/'>Lien du site web</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={graphmap}/>
                        <Carousel.Caption>
                            <h3>Graph & Plan</h3>
                            <p>2022</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={gestion}/>
                        <Carousel.Caption>
                            <h3>Gestion d'annuaire</h3>
                            <p>2021</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pres}/>
                        <Carousel.Caption>
                            <h3>Présentation du BUT Informatique</h3>
                            <p>2021</p>
                            <a href="https://nicz-dsj.github.io/PresentationBUT-Gesse-DSJ/public/page1_accueil.html">Lien du site web</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Projects;