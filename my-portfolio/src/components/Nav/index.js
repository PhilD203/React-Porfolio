import React from 'react';




function Nav() {
    let color = {
        backgroundColor : "#18222d",
        color: "white"
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light " id="navBar" style={color}>
            <a className="navbar-brand">PD</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" style={color}>About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={color}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={color}>Contact</a>
                    </li>     
                </ul>
            </div>
        </nav>
    )
}


export default Nav;
