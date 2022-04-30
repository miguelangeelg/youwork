import React, { useState } from "react";
import "./css/home.css";
import CorouselCardsJobs from "../../components/CorouselCardsJobs";
import JobList from "../../components/JobList";
import CorouselCardsPerson from "../../components/CorouselCardsPerson";
import Modal from "../../components/Modal";
import ModalContent from "../../components/ModalContent";
import CarouselHome from "./components/carousel/CarouselHome";
// import $ from 'jquery';
const Home = () => {
  const [infoModal, setInfoModal] = useState("");
  const [modalType, setModalType] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-2 contentHomeAbsolute">
        
      <Modal
        infoModal={infoModal}
        title={infoModal.title}
        modalType={modalType}
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <ModalContent type={modalType} data={infoModal} />
      </Modal>

      <div className="Home row">
        <CarouselHome />
      </div>
      <div className="corouseldiv row p-3">
        <CorouselCardsJobs
          jobSelected={setInfoModal}
          modalType={setModalType}
          setOpenModal={setOpenModal}
        />
      </div>
      <div className="corouseldiv row p-3">
        <CorouselCardsPerson
          userSelected={setInfoModal}
          modalType={setModalType}
          setOpenModal={setOpenModal}
        />
      </div>
      <div className="corouseldiv row p-3">
        <div className="titleBetterJobs ">
          <h4 className="d-flex justify-content-start colorTextTheme">
            Mas Empleos...
            <i className="bx bxs-star"></i>
          </h4>
          <hr />
        </div>
        <JobList
          jobSelected={setInfoModal}
          modalType={setModalType}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default Home;
