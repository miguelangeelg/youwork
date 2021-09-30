import React, { useState } from 'react';
import '../components/style/home.css';
import carousel1 from '../assets/img/home/carousel1.png'
import carousel2 from '../assets/img/home/carousel2.png'
import carousel3 from '../assets/img/home/carousel3.png'
import carousel4 from '../assets/img/home/carousel4.png'
import CorouselCards from '../components/CorouselCards';
import JobList from '../components/JobList';
import CorouselCardsPerson from '../components/CorouselCardsPerson';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
// import $ from 'jquery';
const Home = () => {
    const [infoModal, setInfoModal] = useState("");
    const [modalType, setModalType] = useState("");
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="p-2 contentHomeAbsolute">
            {
                infoModal ? (
                    <Modal title={infoModal.title} modalType={modalType} openModal={openModal} setOpenModal={setOpenModal}>
                        <ModalContent type={modalType} data={infoModal} />
                    </Modal>
                ) : (
                    <Modal>

                    </Modal>
                )
            }
            <div className="Home row">
                <div id="carouselExampleFade" className="carousel slide carousel-fade desktopStyle" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="some" src={carousel1} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img alt="some" src={carousel2} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img alt="some" src={carousel3} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img alt="some" src={carousel4} className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="corouseldiv row p-3">
                <div className="titleBetterJobs ">
                    <h4 className="d-flex justify-content-start">Trabajos recomendados
                        <i className='bx bxs-star'></i>
                    </h4> <small>Deliza hacia la izquierda para ver mas... </small>
                    <hr />
                </div>
                <CorouselCards jobSelected={setInfoModal} modalType={setModalType} setOpenModal={setOpenModal} />
            </div>
            <div className="corouseldiv row p-3">
                <div className="titleBetterJobs ">
                    <h4 className="d-flex justify-content-start">Personas recomendadas
                        <i className='bx bxs-star'></i>
                    </h4>
                    <small>Deliza hacia la izquierda para ver mas... </small>
                    <hr />
                </div>
                <CorouselCardsPerson userSelected={setInfoModal} modalType={setModalType} setOpenModal={setOpenModal}/>
            </div>
            <div className="corouseldiv row p-3">
                <div className="titleBetterJobs ">
                    <h4 className="d-flex justify-content-start">Mas Empleos...
                        <i className='bx bxs-star'></i>
                    </h4>
                    <hr />
                </div>
                <JobList />
            </div>
        </div>
    )
}

export default Home;