import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Cats'R'Us </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Adopt A Cat</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Toys and Supplies</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Coffee with a Cat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}