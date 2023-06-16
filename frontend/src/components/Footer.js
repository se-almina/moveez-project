import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer">

                <div className="row">
                    <p>Moveez Software Engineering Project built using MERN stack!</p>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div>MOVEEZ Copyright © 2023</div>
            </div>
        </footer>
    )
}