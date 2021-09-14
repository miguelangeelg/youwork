
import React from 'react';

const ModalContent = (props) => {

    const { type, data } = props;
    console.log(data)
    return (
        <div>
            {
                type === "job" ? (
                    <div>
                        <p className="descriptionJobTitle">Descripción:</p>
                        <p className="descriptionModalJob">
                            {data.description}
                        </p>
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
                ) : (
                  <h5>Working in this...</h5>
                )
            }
        </div>
    )

}


export default ModalContent;