import React from 'react';
import './style.css'
import Image from 'react-bootstrap/Image';

function Resume() {
    return (
        <div class="jumbotron jumbotron-fluid" id="resumeSection">
            <div class="container">
                <div class="row" id="resumeRow">
                    <div class="col-sm-4">
                        <h1 class="display-4" id="resumeTitle">Resume</h1>
                    </div>
                    <div class="col-sm-2">

                    </div>
                    <div class="col-sm-2">
                        <a href="https://drive.google.com/file/d/15c_HH9zfB0852fR0cz940_Az-zd-WTv7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Image width={171} height={180} mode='fit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W22soIimNSpFjchXaXOjk86SgisPnZGaV8GXiOT_zXnMVTjwSQ" roundedCircle />
                        </a>
                    </div>
                    <div class="col-sm-2">

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Resume;