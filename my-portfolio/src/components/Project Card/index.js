import React from 'react';
import './style.css'

function ProjectCard(props) {
    return (
        <div className = "card"  >
            <div className = "img-container">
            <img alt={props.name} src={props.image} id="cardImg" />
            </div>
            <div className="content">
            <ul>
            <li>
                <strong>Project:</strong> {props.name}
            </li>
            <li>
                <strong>Description:</strong> {props.description}
            </li>
            <li>
            
            </li>

            </ul>
            </div>
        </div>
    )
}
        
export default ProjectCard;