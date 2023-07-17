import React from 'react';
import {useState} from "react";
import './nav.css';

function Nav(){
    const [ fix, setFix ] = useState(false);
    const [ visible, setVisible ] = useState(false);

    function setFixed(){
        if (window.scrollY >= 720){
            setFix(true);
        }
        else{
            setFix(false);
        }
    }

    function show(){
        if(visible){
            setVisible(false)
        }
        else{
            setVisible(true);
        }
    }

    window.addEventListener("scroll", function (){
        if(window.innerWidth > 700){
            setFixed();
        }
    });

    window.addEventListener("resize", function (){
        const navigation : HTMLElement | null = document.querySelector('.navigation');
        if(navigation?.classList.contains('fixed') && window.innerWidth <= 700){
            navigation?.classList.remove('fixed')
        }
        else if(navigation?.classList.contains('visible') && window.innerWidth > 700){
            navigation?.classList.remove('visible')
        }
    })

    return(
        <header>
            <div className="navbtn" onClick={function (){if(window.innerWidth <= 700 && !visible){show();}}}><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
            <nav className={'navigation' + (fix ? ' fixed' : '') + (visible ? ' visible' : '')}>
                <div className="container">
                    <span id="website-name" onClick={function (){document.getElementById('home-section')!.scrollIntoView(); if(window.innerWidth <= 700 && visible){show();} }}>Nicolas D.</span>
                    <ul className="links">
                        <li onClick={function (){document.getElementById('presentation-section')!.scrollIntoView(); if(window.innerWidth <= 700 && visible){show();} }}><span>Présentation</span></li>
                        <li onClick={function (){document.getElementById('abilities-section')!.scrollIntoView(); if(window.innerWidth <= 700 && visible){show();} }}><span>Compétences</span></li>
                        <li onClick={function (){document.getElementById('projects-section')!.scrollIntoView(); if(window.innerWidth <= 700 && visible){show();} }}><span>Projets</span></li>
                        <li onClick={function (){document.getElementById('contact-section')!.scrollIntoView(); if(window.innerWidth <= 700 && visible){show();} }}><span>Contact</span></li>
                    </ul>
                </div>
                <div className="closebtn" onClick={function (){if(window.innerWidth <= 700 && visible){show();}}}><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
            </nav>
        </header>
    );
}

export default Nav;