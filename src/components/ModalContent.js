
import React from 'react';
// import img1 from '../assets/img/modal/jobModal.svg';
// import img2 from '../assets/img/modal/jobModal2.svg';
// import img3 from '../assets/img/modal/jobModal3.svg';
// import img4 from '../assets/img/modal/jobModal4.svg';
// import img5 from '../assets/img/modal/jobModal5.svg';
// import img6 from '../assets/img/modal/jobModal6.svg';
// import $ from 'jquery';

import './style/modalContent.css';
const ModalContent = (props) => {

    const { type, data } = props;

    // let imgs = [img1,img2,img3, img4, img5, img6];

    // let img = imgs[Math.floor((Math.random() * (5 - 0) + 0))];


    return (
        <div>
            {
                type === "job" ? (
                    <div>
                        <p className="descriptionJobTitle">Descripción:</p>
                        <p className="descriptionModalJob">
                            {data.description}
                        </p>
                        <div className="row">
                            <div className="col divInfoModalJob">
                                <p className="descriptionJobTitle">Fecha:</p> <span> {data.date}:</span>
                                <p className="descriptionJobTitle">Salario:</p> <span> {data.salary}:</span>
                                <p className="descriptionJobTitle">Locación:</p> <span> {data.location}:</span>
                                <p className="descriptionJobTitle">Publicador:</p>
                                <div className="row" style={{ paddingLeft: 12 }}>
                                    {data.employer}
                                    <button className=" btn  btnSeeEmployerProfileM">Ver Perfil</button>
                                </div>
                                <p style={{ marginTop: 20 }} className="descriptionJobTitle">Calificación del publicador:</p> <span> {data.employerScore}</span>
                            </div>
                        </div>

                    </div>
                ) : (
                    <h5>Working in this...</h5>
                )
            }
        </div>
    )

}


export default ModalContent;