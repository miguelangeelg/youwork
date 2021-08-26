import React, { Component } from 'react';
import './style/navTop.css';

import userThree from '../assets/img/users/user3.png';

class NavTop extends Component {
    render() {
        return (
            <nav class="navbar-expand-lg  p-2">
                <div className="row">
                    <div className="col-2">
                        <form class="d-flex d-flex justify-content-start">
                            <input class="form-control " id="inputSearchNavbar" autocomplete="off" placeholder="Buscar Empleo" aria-label="Search" />
                        </form>
                    </div>
                    <div className="col-10 contentNav">
                        <div class="collapse navbar-collapse float-right d-flex justify-content-end" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <span className="tooltipProfile">Notificaciones</span>
                                    <i class='bx bxs-bell'></i>
                                </li>
                                <li class="nav-item">
                                    <span className="tooltipProfile">Mensajes</span>
                                    <i class='bx bxs-message-rounded'></i>
                                </li>
                                <li class="nav-item">
                                    <span className="tooltipProfile">Ver Perfil</span>
                                    <img className="userAvatar" src={userThree} />
                                </li>
                                <li class="nav-item">
                                    Daniela Ramirez
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}

export default NavTop;