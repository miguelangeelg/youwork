import React from 'react';
import './style/corouselCardsPerson.css';
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
// import userSeven from '../assets/img/users/user7.jpeg';
// import userEight from '../assets/img/users/user8.jpeg';

const list = Object.entries({
    "Jualian Perez": {
        "id": "1",
        "name": "Jualian Perez",
        "photo": userOne,
        "dedication": "Jardinero",
        "age": 25,
        "experience": 5
    },
    "Manuela Rodriguez": {
        "id": "2",
        "name": "Manuela Rodriguez",
        "photo": userTwo,
        "dedication": "Enfermera",
        "age": 24,
        "experience": 3
    },
    "Vanessa Zapata": {
        "id": "3",
        "name": "Vanessa Zapata",
        "photo": userThree,
        "dedication": "Aseadora",
        "age": 29,
        "experience": 0
    },
    "Juan Fernando Q": {
        "id": "4",
        "name": "Juan Fernando Q",
        "photo": userFour,
        "dedication": "Mensajero",
        "age": 19,
        "experience": 4
    },
    "Mariano Falda": {
        "id": "5",
        "name": "Mariano Falda",
        "photo": userFive,
        "dedication": "Desarrollador",
        "age": 24,
        "experience": 3
    },
    "Andres Zapata": {
        "id": "6",
        "name": "Andres Zapata",
        "photo": userSix,
        "dedication": "Archivista",
        "age": 28,
        "experience": 2
    }
})

const CorouselCardsPerson = () => {
    return (
        <div className="containerCarousel">
            <Swiper
                spaceBetween={4.2}
                slidesPerView={1}
                breakpoints={{
                    // when window width is >= 640px
                    1180: {
                        slidesPerView: 3
                    },
                    700: {
                        slidesPerView: 2
                    }
                }}
                style={{ width: "100%", height:"285px" }}>
                {
                    list.map((person, i) => {
                        return (
                            <SwiperSlide className="betterPersons" key={Math.random()} >
                                <div className="cardbetterPerson">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col">
                                                <div className="titleJobCard" >
                                                    <p className="titleText">{person[1].name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <img alt="some" src={person[1].photo} />
                                            </div>
                                            <div className="col">
                                                <div className="userinfo">
                                                    <ul>
                                                        <li>
                                                            <b><span className="titleUser">Profeción:</span> {person[1].dedication}</b>
                                                        </li>
                                                        <li>
                                                            <b><span className="titleUser">Edad:</span> {person[1].age} años</b>
                                                        </li>
                                                        <li>
                                                            <b><span className="titleUser">Experiencia:</span> {person[1].experience} años</b>
                                                        </li>
                                                        <li>
                                                            <p className="calitifationstring">Calificación:</p>
                                                            <div className="ratingUser">
                                                                <i className='bx bxs-star true'></i>
                                                                <i className='bx bxs-star true'></i>
                                                                <i className='bx bxs-star true'></i>
                                                                <i className='bx bxs-star true'></i>
                                                                <i className='bx bxs-star true'></i>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row" style={{ height: "43%" }}>
                                            <div className="col">
                                                <div className="col">
                                                    <button>Ver Perfil</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )


}

export default CorouselCardsPerson;