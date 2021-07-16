import React from 'react';
import Header from '../../Components/Header/Header'
import Movies from '../Movies/Movies'

class Homepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Movies />
            </div>
        )
    }
}

export default Homepage;