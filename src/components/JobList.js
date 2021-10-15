import React, {useState, useEffect} from 'react';
import './style/jobList.css';

const list = [
    {
        "id": 1,
        "title": "Ayudante de construcción",
        "description": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`,
        "icon" :"bxs-wrench",
        "by":"Manuel Medrano",
        "date": "19/12/2021",
        "location": "Bello, Antioquia",
        "employerScore": "5.0",
        "employer": "Manuel Medrano",
        "salary": "50.000",
    },
    {
        "id": 2,
        "title": "Paseador de perros",
        "description": "Necesito joven con amor a los animales para cuidar mis mascotas.",
        "icon": "bxs-face",
        "by":"Camilo Zapata",
        "date": "20/11/2021",
        "location": "Envigado, Antioquia",
        "employerScore": "5.0",
        "employer": "Manuel Medrano",
        "salary": "90.000",
    },
    {
        "id": 3,
        "title": "Fisioterapeuta",
        "description": "Necesito un fisioterapeuta o estudiante para que me ayude a recuperarme.",
        "icon": "bx bx-body",
        "by":"Mariana Rodriguez",
        "date": "01/12/2021",
        "location": "Caldas, Antioquia",
        "employerScore": "5.0",
        "employer": "Manuel Medrano",
        "salary": "58.000",
    },
    {
        "id": 4,
        "title": "Aseadora",
        "description": "Alguna mujer para hacer aseo en mi casa el dia a 65.000 pesos.",
        "icon": "bx bxs-home-heart",
        "by":"Daniela Martinez",
        "date": "02/01/2022",
        "location": "Sabaneta, Antioquia",
        "employerScore": "5.0",
        "employer": "Manuel Medrano",
        "salary": "65.000",
    },
    {
        "id": 5,
        "title": "Plomero",
        "description": "Necesito un plomero para arreglar unas tuberias en mi casa.",
        "icon" :"bxs-wrench",
        "by":"Juan Zambrano",
        "date": "17/11/2021",
        "location": "Medellin, Antioquia",
        "employerScore": "5.0",
        "employer": "Manuel Medrano",
        "salary": "23.000",
    }
];
const JobList = (props) => {
  
  const { jobSelected, modalType, setOpenModal } = props;
  const [limitDescription, setLimitDescription] = useState(230)
  useEffect(() => {

    if (window.innerWidth <= 817) {
      setLimitDescription(100);
    } else {
      setLimitDescription(230);
    }

    window.onresize = function() {
      if (window.innerWidth <= 817) {
        setLimitDescription(100);
      } else {
        setLimitDescription(230);
      }

    }
  }, [])

  const openModal = (e) => {
    modalType("job");
    let job;
    list.forEach(element => {
      if (element.id === e) {
        job = element;
        return;
      }
    });
    jobSelected(job);
    setOpenModal(true);
  }

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
                                    <p className="titleText ">{job.title}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="descriptionJobList">
                                    <div className="descriptionTitle colorTextTheme">Descripción:</div>
                                    <p className="colorTextTheme">
                                      {(job.description).substr(0,limitDescription)}...
                                    </p>
                                    <div className="divItemsJobList colorTextTheme">
                                      <i className='bx bxs-location-plus'></i>
                                      Medellín
                                    </div>
                                    <div className="divItemsJobList colorTextTheme">
                                      <i className='bx bxs-calendar'></i>
                                        Fecha para trabajar: {job.date}
                                    </div>
                                    <div className="divItemsJobList colorTextTheme">
                                       <i className='bx bx-dollar'></i>
                                        {job.salary} COP X Hora
                                    </div>
          
                                    <small>{job.postedDate}</small>
                                  </div>
          
                                </div>
                              </div>
                              <div className="divBtnJobList">
                                <button className="seeMoreInfoCardJob"  onClick={()=>{openModal(job.id)}} >Ver mas información</button>
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