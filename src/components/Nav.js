import React from 'react';
import { NavLink } from "react-router-dom";

const links = [
    {
        to: '/adv-hw-23-OlehMykolaichuk/',
        label: 'Home',
    },
    {
        to: '/adv-hw-23-OlehMykolaichuk/posts',
        label: 'Posts',
    },
];

const Nav = () => {
    return (
        <nav>
            <ul className = "flex">
                {links.map(link => (
                    <li key = {link.to}>
                        <NavLink exact to = {link.to} activeClassName = "active">{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )    
};

export default Nav;