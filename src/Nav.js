import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <h3>Akz0.o</h3>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="./">
                        <button>Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="./About">
                        <button>About</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="./Contact">
                        <button>Contact</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
