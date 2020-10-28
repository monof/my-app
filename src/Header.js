import React from 'react';
import SVG from './Logo';

function Header() {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <SVG name="logo" height="32" width="102" color="#ffffff" />
                    </a>
                </div>
                <div className="menu"></div>
                <div className="ect_menu"></div> 
            </div>   
        </header>
    );
};

export default Header;