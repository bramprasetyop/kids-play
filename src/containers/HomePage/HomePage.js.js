import React, { Component } from 'react'
import Header from '../../component/header/header';
import Body from '../../component/body/index';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default HomePage;