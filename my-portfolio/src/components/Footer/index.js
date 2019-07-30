import React from 'react';
import './style.css';
import Image from 'react-bootstrap/Image';

function Footer() {

    let color = {
        backgroundColor: "#18222d",
        color: "white",
        fontSize: "24px",
    }

    let margin = {
        margin: "15px"
    }

    return (
        <footer className="page-footer font-small blue" style={color}>


            <div className="footer-copyright text-center py-3" style={color}>
                <a href="mailto:phillipdugliss@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image style={margin} width={48} height={36} mode='fit' src="https://www.trzcacak.rs/myfile/full/318-3188823_gmail-icon.png" rounded />
                </a>
                <a href="https://www.linkedin.com/in/phillip-dugliss/"target="_blank" rel="noopener noreferrer">
                    <Image style={margin} width={48} height={48} mode='fit' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" rounded />
                </a>
                <a href="https://github.com/PhilD203" target="_blank" rel="noopener noreferrer">
                    <Image style={margin} width={48} height={48} mode='fit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsjEwUaj7SjHQ4Encep0VJOz-ODloafMTUOPLi0Wg_x5wsg3q" rounded />
                </a>
            </div>






        </footer>
    )
}

export default Footer;