import React from 'react';
import './style/jobList.css';



const list = [
    {
        "title": "Ayudante de construcción",
        "description": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha .`,
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
                            <div className="cardJobList" key={Math.random()}>
                            <div className="grid" style={{ height: "100%" }}>
                              <div className="row">
                                <div className="col">
                                  <div className="titleJobList" >
                                    <p className="titleText">{job.title}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="descriptionJobList">
                                    <div className="descriptionTitle">Descripción:</div>
                                    <p>
                                      {job.description}
                                    </p>
                                    <div className="divItemsJobList">
                                      <i className='bx bxs-location-plus'></i>
                                      Medellín
                                    </div>
                                    <div className="divItemsJobList">
                                      <i className='bx bxs-calendar'></i>
                                        Fecha para trabajar: 2021-10-23
                                    </div>
                                    <div className="divItemsJobList">
                                       <i className='bx bx-dollar'></i>
                                        32.000 COP X Hora
                                    </div>
          
                                    <small>{job.postedDate}</small>
                                  </div>
          
                                </div>
                              </div>
                              <div className="divBtnJobList">
                                <button className="seeMoreInfoCardJob"  >Ver mas información</button>
                              </div>
          
                            </div>
                          </div>
                            // <div className="listCard" key={Math.random()} >
                            //     <div className="row">
                            //         <div className="col-1 p-0">
                            //             <div className="iconCardList">
                            //                 <div className="containerIcon">
                            //                     <i className={`bx ${job.icon}`} ></i>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="col-11">
                            //             <div className="row">
                            //                 <h5 style={{ paddingTop: 13 }}>{job.title}</h5>
                            //                 <hr />
                            //             </div>
                            //             <div className="row">
                            //                 <div className="row">
                            //                     <div className="col-9">
                            //                         <div className="jobDescriptionList">
                            //                             <div> <span style={{ "color": "#007dc0" }}>Descripción: </span> {job.description} </div>
                            //                             <div className="itemJobList">
                            //                             <div> <span style={{ "color": "#007dc0" }}> <i className='bx bxs-location-plus'></i></span> Medellín</div>

                            //                             <div style={{textAlign:"left"}}> <span style={{ "color": "#007dc0" }}> <i className='bx bxs-calendar'></i></span> Fecha para trabajar: 2021-10-23 </div>
                            //                             <div> <span style={{ "color": "#007dc0" }}><i className='bx bx-dollar'></i></span> Acordado  </div>
                            //                             <div> <span style={{ "color": "#007dc0" }}><i className='bx bxs-time'></i></span>Publicado 2 dias atras. </div>
                            //                             </div>
                            //                         </div>
                            //                     </div>
                            //                     <div className="col-3" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            //                         <div className="containerbuttonInfo">
                            //                             <button className="buttonLookJob">Ver Empleo</button>
                            //                         </div>
                            //                     </div>
                            //                 </div>

                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default JobList;