import React from 'react';
import '../styles/Navbar.css';
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
            <div className='name'>MOVEEZ</div>
            <div>
                <form>
                    <input type='text' placeholder='Search'></input>
                </form>
            </div>
            </div>
            <div className='profile'><BsFillPersonFill/></div>
        </div>
    )
}