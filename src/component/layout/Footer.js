import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>

                <div className="footer p-3 mt-5 mb-4 text-center bg-dark text-light">
                    Developed By :<span className="text-warning font-weigth-normal"> Vishal Kank</span>
                    , Using <i className="fab fa-react" /> React Js & Redux Js integrated with external movies data API
                            <a href="http://www.omdbapi.com/" target="blank" rel="noopener noreferrer"> OMDB</a>
                </div>

            </footer>
        )
    }
}
