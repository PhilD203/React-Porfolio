import React from 'react';
import './style.css';


function IntroSection() {

    return (

        <div class="jumbotron jumbotron-fluid" id="introSection">
            <div class="container">
                <h1 class="display-4" id="name">Phil Dugliss</h1>                
            </div>
            <div class="container">
                <p class="lead" id="hobbies"> Educator</p>
                <p class="lead" id="hobbies"> Musician</p>
                <p class="lead" id="hobbies"> Traveler</p>
                <p class="lead" id="hobbies"> Developer.</p>

            </div>
        </div>

    )
}

export default IntroSection;