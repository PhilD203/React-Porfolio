import React from 'react';
import './style.css'
import Image from 'react-bootstrap/Image';

function About() {
    return (

        <div class="jumbotron jumbotron-fluid" id="aboutSection">
            <div class="container">
                <div class="row" id="aboutMe">
                    <div class="col-sm-4">
                        <h1 class="display-4" id="aboutMeTitle">About Me</h1>
                        <p class="lead">
                        Educator and life long learner looking further my creative passion and curiosity with a position in web development. Seeking a gratifying and engaging career that involves solving challenges and working alongside others to complete shared goals. Great communicator, collaborator, problem solver, and proficient in all Sciences.</p>
                    </div>
                    <div class="col-sm-2" id="nwDiv">
                    <Image width={171} height={180} mode='fit' src="https://news.northwestern.edu/themes/newscenter/images/northwestern-thumbnail.jpg" roundedCircle />
                    <h4>Northwestern Bootcamp Alum</h4>
                    </div>
                    <div class="col-sm-2" id="teacherDiv">
                    <Image width={171} height={180} mode='fit'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfvahmaKEx8mgqdm7e7mHSsjLaucGNyCv16ocUyCJ_peMC6VD" roundedCircle />
                    <div id="header2">
                    <h4>Former Teacher</h4>
                    </div>
                    </div>
                    <div class="col-sm-2" id="sbDiv">
                    <Image width={171} height={180} mode='fit' src="http://i0.wp.com/clipartportal.com/wp-content/uploads/2018/12/snow-mountain-clipart-6.jpg" roundedCircle />
                        <div id="header3">
                        <h4>Future Pro Snowboarder</h4>
                        </div>
                    </div>
                </div>
                {/* <div class="row" id="resumeRow">
                    <div class="col-sm-4">
                        <h1 class="display-4" id="resumeTitle">Resume</h1>
                    </div>
                    <div class="col-sm-2">
                    
                    </div>
                    <div class="col-sm-2">
                    <a href="https://drive.google.com/file/d/15c_HH9zfB0852fR0cz940_Az-zd-WTv7/view?usp=sharing">
                    <Image width={171} height={180} mode='fit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W22soIimNSpFjchXaXOjk86SgisPnZGaV8GXiOT_zXnMVTjwSQ" roundedCircle />
                    </a>
                    </div>
                    <div class="col-sm-2">

                    </div>

                </div> */}
            </div>
        </div>
    )
}




export default About;