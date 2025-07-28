import React from 'react';
import {Carousel} from "react-bootstrap";
import './projects.css';
import cdlv from '../img/cdlv.png';
import travelmate from '../img/travelmate.jpg';
import trouvetonplat from '../img/trouvetonplat.png';
import snake from '../img/snake.png';
import graphmap from '../img/graphmap.png';
import gestion from '../img/gestion.png';
import usibee from '../img/usibee.png';
import pres from '../img/pres.png';
import medical from '../img/medical.png';

function Projects(){
    return(
        <section id="projects-section">
            <h1>Mes projets</h1>
            <div className="projects-list">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={medical}/>
                        <Carousel.Caption>
                            <h3><a href="https://github.com/nicz-dsj/medical-interface-unicaen-v0.git" target="_blank">Traitement d'imagerie médicale</a></h3>
                            <p>2025</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={usibee}/>
                        <Carousel.Caption>
                            <h3><a href="https://usibee.com" target="_blank">Usibee</a></h3>
                            <p>2024</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cdlv}/>
                        <Carousel.Caption>
                            <h3><a href="https://cheffesdanslaville.com" target="_blank">Cheffes dans la ville</a></h3>
                            <p>2023</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trouvetonplat}/>
                        <Carousel.Caption>
                            <h3><a href="https://github.com/nicz-dsj/trouve-ton-plat" target="_blank">Trouve ton plat</a></h3>
                            <p>2023</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={snake}/>
                        <Carousel.Caption>
                            <h3><a href="https://nicz-dsj.github.io/projet-js-snake/public/" target="_blank">Snake</a></h3>
                            <p>2022</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pres}/>
                        <Carousel.Caption>
                            <h3><a href="https://nicz-dsj.github.io/PresentationBUT-Gesse-DSJ/public/page1_accueil.html" target="_blank">Présentation du BUT Informatique</a></h3>
                            <p>2021</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Projects;