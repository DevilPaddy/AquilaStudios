import './navbar.css';
import Link from 'next/link';
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function () {

    return (
        <div className="navbar">
            <div className="nav">
                <Link
                    href='/'
                    className="logo">
                    <h1>AquilaStudios</h1>
                </Link>

                <ul className='nav-menu'>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>ABOUT US</li>
                </ul>

                <div className="nav-btn">
                    <button>Contact Us</button>
                </div>

                <div className="menu-btn">
                    <HiOutlineMenuAlt1 />
                </div>
            </div>
        </div>
    )
}