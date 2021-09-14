import React, {useState} from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import './style/navTop.css';

import userThree from '../assets/img/users/user3.png';

const NavTop = () => {

    const [filteredJobs, setFilteredJobs] = useState(null);
    const [selectedJob1, setSelectedJob1] = useState(null);


    const jobs = [
        {"name":"Aseadora"}, {"name":"Desarrollador"}, {"name":"Conductor"}, {"name":"Archivista"}
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
            <nav className="navbar-expand-lg  p-2">
                <div className="row">
                    <div className="col-2">
                        <form className="d-flex d-flex justify-content-start">
                         <AutoComplete
                          inputId="inputSearchNavbar"
                          value={selectedJob1}
                          suggestions={filteredJobs}
                          completeMethod={searchJob}
                          placeholder="Buscar Trabajo"
                          field="name"
                          onChange={(e) => setSelectedJob1(e.value)}
                          />

                            
                            {/* <input className="form-control " id="inputSearchNavbar" autoComplete="off" placeholder="Buscar Empleo" aria-label="Search" /> */}
                        </form>
                    </div>
                    <div className="col-10 contentNav">
                        <div className="collapse navbar-collapse float-right d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
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
                                <li className="nav-item">
                                    Daniela Ramirez
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