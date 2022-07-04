import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import '../style/navTop.css';

import userThree from '../../assets/img/users/meProfile';

const NavTop = (props) => {

    const { setTheme, theme } = props;
    const [filteredJobs, setFilteredJobs] = useState(null);
    const [selectedJob1, setSelectedJob1] = useState(null);

    const jobs = [
        { "name": "Aseadora" }, { "name": "Desarrollador" }, { "name": "Conductor" }, { "name": "Archivista" }
    ];

    const searchJob = (event) => {


        setTimeout(() => {
            let _filteredJobs;
            if (!event.query.trim().length) {
                _filteredJobs = [...jobs];
            }
            else {
                _filteredJobs = jobs.filter((jobI) => {
                    return jobI.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredJobs(_filteredJobs);
        }, 250);
    }

    return (
        <div className="containerNavbarTop">
            <nav className="navbar-expand-lg  p-2 componentTheme" style={{ zIndex: 4 }}>
                <div className="row">
                    <div className="col-2">
                        <form className="d-flex d-flex justify-content-start">
                            <AutoComplete
                                inputId="inputSearchNavbar"
                                value={selectedJob1}
                                suggestions={filteredJobs}
                                completeMethod={searchJob}
                                placeholder="Buscar Empleo"
                                field="name"
                                onChange={(e) => setSelectedJob1(e.value)}
                            />


                            {/* <input className="form-control " id="inputSearchNavbar" autoComplete="off" placeholder="Buscar Empleo" aria-label="Search" /> */}
                        </form>
                    </div>
                    <div className="col-10 contentNav">
                        <div className="collapse navbar-collapse float-right d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item colorTextTheme" style={{ display: "flex", alignItems: "center" }}>
                                    Modo Oscuro
                                    <input id="switch" checked={theme === "dark" ? true : false} type="checkbox" onChange={(e) => setTheme()}/>
                                    <label className="contentSwitch" htmlFor="switch">
                                    <div className="circle">
                                    </div>
                                    </label> */}
                                {/* <p style={{margin:0, marginRight:10}}>Modo Oscuro</p>
                                    <InputSwitch
                                    //  checked={theme}
                                      onChange={(e) => setTheme()} /> */}
                                {/* </li> */}
                                <li className="nav-item">
                                    <span className="tooltipProfile">Notificaciones</span>
                                    <i className='bx bxs-bell'></i>
                                </li>
                                <li className="nav-item">
                                    <span className="tooltipProfile">Mensajes</span>
                                    <i className='bx bxs-message-rounded'></i>
                                </li>
                                <li className="nav-item">
                                    <span className="tooltipProfile">Ver Perfil</span>
                                    <img alt="some" className="userAvatar" src={userThree} />
                                </li>
                                <li className="nav-item colorTextTheme" style={{ display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: 0 }}>Miguel Angel Gutiérrez</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavTop;