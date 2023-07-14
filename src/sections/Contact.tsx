import React, {useState} from 'react';
import './contact.css';

function Contact(){
    return(
        <section id="contact-section">
            <h1>Me contacter</h1>
            <div className="contact-list">
                <a href="mailto:ndstj@outlook.fr">Mail</a>
                <a href="https://www.linkedin.com/in/nicolas-de-saint-jean-8786ab221/">LinkedIn</a>
                <a href="https://github.com/nicz-dsj">Github</a>
            </div>
        </section>
    );
}

export default Contact;