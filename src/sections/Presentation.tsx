import React, {useState} from 'react';
import './presentation.css';
import {Carousel} from "react-bootstrap";

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
            <div className={visible ? 'presentation-text visible' : 'presentation-text'}>
                <h1>À propos de moi</h1>
                <p>Passionné depuis mon plus jeune âge par l'informatique, mon objectif est de devenir développeur web confirmé. J'ai commencé mon aventure au lycée en seconde avec la
                    spécialité Informatique et Création Numérique (ICN) dans lequel j'ai commencé à réaliser mes premiers projets. Depuis mon envie de progresser ne m'a jamais quitté et
                    j'ai découvert au fil du temps de nouvelles technologies afin de pouvoir mener à bien mes projets.</p>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"/>
                    <Carousel.Caption>
                        <h2>Test</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"/>
                    <Carousel.Caption>
                        <h2>Test</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Presentation;