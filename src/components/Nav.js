import React, { Component } from 'react';
import './style/nav.css';
import youWorkImg from '../assets/img/YourWork.png';
// import userOne from '../assets/img/users/user1.jpeg';
// import userTwo from '../assets/img/users/user2.jpeg';
// import userThree from '../assets/img/users/user3.png';
const Nav = () =>{
        return (
            <div>
                <div className="sidebar active">
                    <div className="logo-details">
                        {/* <i className='bx bxl-c-plus-plus icon'></i> */}
                        <div className="logo_name" onClick={goToHome} >You Work</div>
                        <i className='bx bx-menu' id="btn" onClick={btnActive} ></i>
                    </div>
                    <ul className="nav-list">
                        <li className="liHome">
                            <img  className="youWorkImg" src={youWorkImg} alt="some" />
                            <span className="tooltip">You Work Inicio</span>
                        </li>
                        <li>
                            <i className='bx bx-search firsticon' onClick={btnSearch} ></i>
                            <input type="text" placeholder="Buscar..." />
                            <span className="tooltip">Buscar</span>
                        </li>
                        <li>
                            <a href="/searchJob">
                                <i className='bx bx-world'></i>
                                <span className="links_name">Buscar Empleo</span>
                            </a>
                            <span className="tooltip">Buscar Empleo</span>
                        </li>
                        <li>
                            <a href="/#">
                                <i className='bx bxs-to-top'></i>
                                <span className="links_name">Publicar Empleo</span>
                            </a>
                            <span className="tooltip">Publicar Empleo</span>
                        </li>
                        <li>
                            <a href="/#">
                                <i className='bx bxs-user'></i>
                                <span className="links_name">Buscar Empleado</span>
                            </a>
                            <span className="tooltip">Buscar Empleado</span>
                        </li>
                        <li>
                            <a href="/#">
                                <i className='bx bxs-user-check'></i>
                                <span className="links_name">Aplicaciones</span>
                            </a>
                            <span className="tooltip">Aplicaciones</span>
                        </li>
                        <li>
                            <a href="/#">
                                <i className='bx bxs-hot'></i>
                                <span className="links_name">Planes Premium</span>
                            </a>
                            <span className="tooltip">Planes Premium</span>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        )

}

const btnActive = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

const btnSearch = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

const goToHome = () => {
    window.location.href = "/";
}



export default Nav;