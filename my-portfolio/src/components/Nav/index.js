import React from 'react';
import Image from 'react-bootstrap/Image'




function Nav() {
    let color = {
        backgroundColor: "#18222d",
    }
    let fontColor = {
        color: "white",
        fontSize: "20px",
        marginLeft:"20px",
        fontFamily: "Arial , OS",
    }

    let margin = {
        marginLeft: "25px"
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light " id="navBar" style={color}>
            <a className="navbar-brand" style={color} style={fontColor}>PD</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" style={color} style={fontColor}>About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={color} style={fontColor}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="mailto:phillipdugliss@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Image style={margin} width={36} height={36} mode='fit' src="https://www.mytechguys.ca/wp-content/uploads/2017/04/6c2a19e497a9354f2c91e59100858490_gmail-logo-vector-gmail-logo-clipart_512-512.jpeg" rounded />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/phillip-dugliss/"target="_blank" rel="noopener noreferrer">
                            <Image style={margin} width={36} height={36} mode='fit' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" rounded />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/PhilD203" target="_blank" rel="noopener noreferrer">
                            <Image style={margin} width={36} height={36} mode='fit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsjEwUaj7SjHQ4Encep0VJOz-ODloafMTUOPLi0Wg_x5wsg3q" rounded />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Nav;
