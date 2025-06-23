import React, {useState} from 'react';
import './home.css';

function Home(){

    return(
        <section id="home-section">
            <div className="home-content">
                <h1>Nicolas DE SAINT JEAN</h1>
                <span>Étudiant en cycle ingénieur en informatique pour la rentrée 2025 en recherche d'alternance</span>
                <span style={{fontSize: "1.2em", margin: "5px", color:"#4b41bd"}}>IMPORTANT : Une nouvelle version du portfolio est actuellement en cours de développement</span>
            </div>
        </section>
    );
}

export default Home;