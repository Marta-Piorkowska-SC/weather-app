import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
    { name: "Szukaj pogody", path: "/", exact: true },
    { name: "Pogoda na dziś", path: "today" },
    { name: "Pogoda długoterminowa", path: "longTerm" },
]

class Navigation extends Component {
    state = {
        clicked: false
    }

    handleNavClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {

        const menu = list.map(item => (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
            </li>
        ))

        return (
            <nav className='main'>
                <div className="menu-icon" onClick={this.handleNavClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'active' : null}>
                    {menu}
                </ul>
            </nav>
        );
    }
}

export default Navigation;