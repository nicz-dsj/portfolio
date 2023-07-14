import React from 'react';
import {useState} from "react";
import './nav.css';

function Nav(){
    const websitename : HTMLElement | null = document.getElementById('website-name');
    const presentationbtn : HTMLElement | null = document.getElementById('presentation-btn');
    const abilitiesbtn : HTMLElement | null = document.getElementById('abilities-btn');
    const projectsbtn : HTMLElement | null = document.getElementById('projects-btn');
    const contactbtn : HTMLElement | null = document.getElementById('contact-btn');

    websitename?.addEventListener('click', function (){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

    presentationbtn?.addEventListener('click', function(){
        window.scroll({
            top: 800,
            behavior: 'smooth'
        })
    })

    abilitiesbtn?.addEventListener('click', function(){
        window.scroll({
            top: 2431,
            behavior: 'smooth'
        })
    })

    projectsbtn?.addEventListener('click', function (){
        window.scroll({
            top: 3252,
            behavior: 'smooth'
        })
    })

    contactbtn?.addEventListener('click', function (){
        window.scroll({
            top: 4211,
            behavior: 'smooth'
        })
    })

    const [ fix, setFix ] = useState(false);

    function setFixed(){
        if (window.scrollY >= 720){
            setFix(true);
        }
        else{
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed);

    return(
        <nav className={fix ? 'navigation fixed' : 'navigation'}>
            <div className="container">
                <span id="website-name">Nicolas D.</span>
                <ul className="links">
                    <li><span id="presentation-btn">Présentation</span></li>
                    <li><span id="abilities-btn">Compétences</span></li>
                    <li><span id="projects-btn">Projets</span></li>
                    <li><span id="contact-btn">Contact</span></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;