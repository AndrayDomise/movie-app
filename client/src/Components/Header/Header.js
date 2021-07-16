import React from 'react';
import './Header.scss'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
            <div>
                <header>
                    <nav className="container__nav">
                        <div className="navLogin">
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
};

export default Header;