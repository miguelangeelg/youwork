// import React from "react";
// import img1 from '../assets/img/modal/jobModal.svg';
// import img2 from '../assets/img/modal/jobModal2.svg';
// import img3 from '../assets/img/modal/jobModal3.svg';
// import img4 from '../assets/img/modal/jobModal4.svg';
// import img5 from '../assets/img/modal/jobModal5.svg';
// import img6 from '../assets/img/modal/jobModal6.svg';
// import $ from 'jquery';
// import { Tooltip } from 'primereact/tooltip';
import { Button } from "primereact/button";
import "./style/modalContent.css";
import { ScrollPanel } from "primereact/scrollpanel";

const ModalContent = (props) => {
  const { type, data } = props;
  console.log(data);
  // let imgs = [img1,img2,img3, img4, img5, img6];

  // let img = imgs[Math.floor((Math.random() * (5 - 0) + 0))];

  return (
    <div>
      {type === "job" ? (
        <div>
          <p className="descriptionJobTitle">Descripción:</p>
          <p className="descriptionModalJob">{data.description}</p>
          <div className="row">
            <div className="col divInfoModalJob">
              <div className="divItemsCardJob">
                <i className="bx bxs-location-plus"></i>
                {data.location}
              </div>
              <div className="divItemsCardJob">
                <i className="bx bxs-calendar"></i>
                Fecha para trabajar: {data.date}
              </div>
              <div className="divItemsCardJob">
                <i className="bx bx-dollar"></i>
                {data.salary} X Hora
              </div>
              <div className="divItemsCardJob">
                <i className="bx bx-user"></i>
                Publicador:{" "}
                <Button
                  className="btnEmployerNameModalInfo"
                  tooltip="Ver perfil"
                  style={{ height: 20, fontSize: 13, width: "auto" }}
                  label={data.employer}
                />
                {/* <span className="employerContentmodal"> {data.employer} </span> */}
                {/* <button className=" btn  btnSeeEmployerProfileM">Ver Perfil</button> */}
              </div>
              <div className="divItemsCardJob">
                <i className="bx bxs-star"></i>
                Calificación: {data.employerScore}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="container-img-prifile-modal-content">
              <img className="profileImage" src={data.photo} />
              <div className="recomendedStar-modal-content">
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="description-modal-content">
              <p className="boldText colorTextTheme"> Descripción: </p>
              <ScrollPanel
                style={{ width: "100%", height: "100px" }}
                className="custombar1"
              >
                <div
                  className="colorTextTheme"
                  style={{ padding: "1em", lineHeight: "1.5" }}
                >
                    {data.description}
                </div>
              </ScrollPanel>
              {/* {data.description} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
