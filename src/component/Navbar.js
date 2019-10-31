import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand  " href="site.my">MovieSeriesInfo</a>
                    </div>

                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-imdb fa-4x" id="imdb-logo" />
                        </li>

                        <li className="nav-item d-inline-block mr-4 ">
                            <i className="fab fa-react fa-4x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
