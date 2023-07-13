import React from 'react';
import {useState} from "react";
import './nav.css';

function Nav(){
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

    const websitename : HTMLElement | null = document.getElementById('website-name');
    const presentationbtn : HTMLElement | null = document.getElementById('presentation-btn');

    websitename?.addEventListener('click', function (){
        // @ts-ignore
        document.getElementById('home-section').scrollIntoView({
            behavior: "smooth"
        })
    })

    presentationbtn?.addEventListener('click', function(){
        // @ts-ignore
        document.getElementById('presentation-section').scrollIntoView({
            behavior: "smooth"
        })
    })

    return(
        <nav className={fix ? 'navigation fixed' : 'navigation'}>
            <div className="container">
                <span id="website-name">Nicolas D.</span>
                <ul className="links">
                    <li><span id="presentation-btn">Présentation</span></li>
                    <li><span>Projets</span></li>
                    <li><span>Compétences</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;