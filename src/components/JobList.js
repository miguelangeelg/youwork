import React from 'react';
import './style/jobList.css';



const list = [
    {
        "title": "Ayudante de construcción",
        "description": "Necesito un muchacho joven para algunos dias.",
        "icon" :"bxs-wrench",
        "by":"Manuel Medrano"
    },
    {
        "title": "Paseador de perros",
        "description": "Necesito joven con amor a los animales para cuidar mis mascotas.",
        "icon": "bxs-face",
        "by":"Camilo Zapata"
    },
    {
        "title": "Fisioterapeuta",
        "description": "Necesito un fisioterapeuta o estudiante para que me ayude a recuperarme.",
        "icon": "bx bx-body",
        "by":"Mariana Rodriguez"
    },
    {
        "title": "Aseadora",
        "description": "Alguna mujer para hacer aseo en mi casa el dia a 65.000 pesos.",
        "icon": "bx bxs-home-heart",
        "by":"Daniela Martinez"
    },
    {
        "title": "Plomero",
        "description": "Necesito un plomero para arreglar unas tuberias en mi casa.",
        "icon" :"bxs-wrench",
        "by":"Juan Zambrano"
    }
];
const JobList = () => {

    return (
        <div>
            <div className="row">
                {
                    list.map(job => {
                        return (
                            <div className="listCard" key={Math.random()} >
                                <div className="row">
                                    <div className="col-1 p-0">
                                        <div className="iconCardList">
                                            <div className="containerIcon">
                                                <i className={`bx ${job.icon}`} ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11">
                                        <div className="row">
                                            <h5 style={{ paddingTop: 13 }}>{job.title}</h5>
                                            <hr />
                                        </div>
                                        <div className="row">
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="jobDescriptionList">
                                                        <div> <span style={{ "color": "#da2021" }}>Descripción: </span> {job.description} </div>
                                                        <div> <span style={{ "color": "#da2021" }}>Salario: </span> Acordado  </div>
                                                        <div> <span style={{ "color": "#da2021" }}>Publicador: </span> <a href="/#" style={{ color: "#da2021" }}>{job.by}</a> </div>
                                                        <div> <span style={{ "color": "#da2021" }}>Fecha de publicación: </span> 2 dias atras. </div>
                                                    </div>
                                                </div>
                                                <div className="col-3" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                                    <div className="containerbuttonInfo">
                                                        <button className="buttonLookJob">Ver trabajo</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default JobList;