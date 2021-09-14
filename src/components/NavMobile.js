import React, {useState} from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import './style/navMobile.css';


const NavMobile = () => {

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
        <div className="navMobile">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand titleMobile" href="/#">You Work</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Mensajes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Notificaciones</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" href="/searchJob">Buscar Empleo</a>


                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Publicar Empleo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Buscar Empleado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Aplicaciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Planes Premium</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Action</a></li>
                                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="">
                            <AutoComplete
                            inputClassName="inputSearchJobMobile"
                            value={selectedJob1}
                            suggestions={filteredJobs}
                            completeMethod={searchJob}
                            field="name"
                            placeholder="Buscar Trabajo"
                            onChange={(e) => setSelectedJob1(e.value)}
                            />
                            <button className="btn btn-outline-danger btnSearchMobile" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default NavMobile;