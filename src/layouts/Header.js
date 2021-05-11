import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';


import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';


const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="baner" />
                )} />
                <Route path="/today" render={() => (
                    <img src={img3} alt="baner" />
                )} />
                <Route path="/longTerm" render={() => (
                    <img src={img2} alt="baner" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="baner" />
                )} />
            </Switch>
        </>
    );
}

export default Header;