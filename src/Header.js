import React from 'react';
import SVG from './Logo';
import Menu from './Menu';

function Header() {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <SVG name="logo" height="32" width="102" color="#ffffff" />
                    </a>
                </div>
                <div className="menu">
                    <Menu />
                </div>
                <div className="ect_menu"></div> 
            </div>   
        </header>
    );
};

export default Header;