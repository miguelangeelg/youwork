import React, { Component } from 'react';
import './style/corouselCardsPerson.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import userOne from '../assets/img/users/user1.jpeg';
import userTwo from '../assets/img/users/user2.jpeg';
import userThree from '../assets/img/users/user3.png';
import userFour from '../assets/img/users/user4.jpeg';
import userFive from '../assets/img/users/user5.jpeg';
import userSix from '../assets/img/users/user6.jpeg';
import userSeven from '../assets/img/users/user7.jpeg';
import userEight from '../assets/img/users/user8.jpeg';


import Rating from 'react-rating';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class CorouselCardsPerson extends Component {

    render() {
        return (
            <div className="containerCarousel">
                <Swiper
                    className="swiperCardPerson"
                    spaceBetween={3}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ width: "100%" }}>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Jualian Perez</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userOne} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Jardinero</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 26 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 5 años</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Manuel Rodriguez</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userTwo} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Enfermera</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 24 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 1 año</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Vanessa Zapata</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userThree} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Aseadora</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 29 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 0</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Juan Fernando Q</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userFour} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Mensajero</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 19 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 1 año</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Camilo Andres Z</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userFive} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Profesor de matematicas</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 32 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 9 años</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="betterPersons" >
                        <div className="cardbetterPerson">
                            <div className="titleJobCard" >
                                <p className="titleText">Daniel Perez</p>
                            </div>
                            <div className="bodyCardPerson">
                                <div className="cardContent">
                                    <div className="row firstContent">
                                        <div className="col">
                                            <img src={userSeven} />
                                        </div>
                                        <div className="col">
                                            <div className="userinfo">
                                                <ul>
                                                    <li>
                                                        <b><span className="titleUser">Profeción:</span> Cantante de reggeaton</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Edad:</span> 23 años</b>
                                                    </li>
                                                    <li>
                                                        <b><span className="titleUser">Experiencia:</span> 3 años</b>
                                                    </li>
                                                    <li>
                                                        <p className="calitifationstring">Calificación:</p>
                                                        <div className="ratingUser">
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                            <i className="justify-content-start" className='bx bxs-star true'></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button>Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }

}

export default CorouselCardsPerson;