import React from "react";
import "./style/corouselCardsPerson.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import userOne from "../assets/img/users/user1.jpeg";
import userTwo from "../assets/img/users/user2.jpeg";
import userThree from "../assets/img/users/user3.png";
import userFour from "../assets/img/users/user4.jpeg";
import userFive from "../assets/img/users/user5.jpeg";
import userSix from "../assets/img/users/user6.jpeg";

// import userSeven from '../assets/img/users/user7.jpeg';
// import userEight from '../assets/img/users/user8.jpeg';

const list = Object.entries({
  "Jualian Perez": {
    id: "1",
    name: "Jualian Perez",
    photo: userOne,
    dedication: "Jardinero, +5 mas",
    age: 39,
    experience: 5,
    description:
      "Soy una hombre berraco echado para adelante con mucha experiencia para aportar en todas mis areas.",
  },
  "Manuela Rodriguez": {
    id: "2",
    name: "Manuela Rodriguez",
    photo: userTwo,
    dedication: "Enfermera",
    age: 24,
    experience: 3,
    description:
      "Me gusta cuidar niños, abuelos. Presto atención 24/7 solo con reserva de 24 horas antes.",
  },
  "Vanessa Zapata": {
    id: "3",
    name: "Vanessa Zapata",
    photo: userThree,
    dedication: "Aseadora",
    age: 29,
    experience: 0,
    description:
      "Me gusta hacer aseo, mujer apasionada por dejar todo en orden y muy detallista a la hora de realizar mi trabajo.",
  },
  "Juan Fernando Q": {
    id: "4",
    name: "Juan Fernando Q",
    photo: userFour,
    dedication: "Mensajero",
    age: 19,
    experience: 4,
    description:
      "Tengo 4 años de experiencia siendo mensajero, me se todas las rutas de la ciudad y soy muy cuidadoso con  lo que llevo.",
  },
  "Mariano Falda": {
    id: "5",
    name: "Mariano Falda",
    photo: userFive,
    dedication: "Desarrollador",
    age: 24,
    experience: 3,
    description:
      "Soy una hombre berraco echado para adelante con mucha experiencia para aportar en todas mis areas.",
  },
  "Andres Zapata": {
    id: "6",
    name: "Andres Zapata",
    photo: userSix,
    dedication: "Archivista",
    age: 28,
    experience: 2,
    description:
      "Soy una hombre berraco echado para adelante con mucha experiencia para aportar en todas mis areas.",
  },
});

const CorouselCardsPerson = (props) => {
  const { userSelected, modalType, setOpenModal } = props;

  // useEffect(() => {

  // }, [])

  const openModal = (e) => {
    modalType("user");
    let user;
    list.forEach((element) => {
      if (element[1].id === e) {
        user = element[1];
        user.title = user.name;
        return;
      }
    });
    userSelected(user);
    setOpenModal(true);
  };

  return (
    <div className="containerCarousel">
      <div className="title ">
        <h4 className="d-flex justify-content-start colorTextTheme">
          Personas recomendadas
          <i className="bx bxs-star"></i>
        </h4>
        <small className="colorTextTheme">Deliza hacia la izquierda para ver mas... </small>
        <hr />
      </div>
      <Swiper
        spaceBetween={4.2}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          // when window width is >= 640px
          1391: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2,
          },
        }}
        style={{ width: "100%", height: "440px" }}
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {list.map((person, i) => {
          return (
            <SwiperSlide className="betterPersons" key={Math.random()}>
              <div className="wrapper">
                <div className="clash-card barbarian">
                  <div className="clash-card__image clash-card__image--barbarian">
                    <img src={person[1].photo} alt="barbarian" />
                  </div>
                  <div className="clash-card__level clash-card__level--barbarian">
                    {" "}
                    {person[1].dedication}
                  </div>
                  <div className="clash-card__unit-name colorTextTheme">
                    {person[1].name}
                  </div>
                  <div className="clash-card__unit-description colorTextTheme">
                    {person[1].description}
                  </div>
                  <div className="divBtnPersonCard">
                    <button
                      onClick={() => {
                        openModal(person[1].id);
                      }}
                    >
                      Ver perfil
                    </button>
                  </div>
                  <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                    <div className="one-third">
                      <div className="stat">{" " + person[1].age}</div>
                      <div className="stat-value">Edad</div>
                    </div>
                    <div className="one-third">
                      <div className="stat">
                        {" " + person[1].experience} Años
                      </div>
                      <div className="stat-value">Exp</div>
                    </div>
                    <div className="one-third no-border">
                      <div className="stat">4.5</div>
                      <div className="stat-value">Score</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="cardbetterPerson">
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
                                        </div>
                                        <div className="row row-infoBetterPerson">
                                            <div className="col">
                                                <div className="userinfo">
                                                    <ul>
                                                        <li>
                                                            <b><span className="titleUser index">Profeción:</span></b> <span className="valueTitleBetterPerson"> {" "+person[1].dedication}</span>
                                                        </li>
                                                        <li>
                                                            <b><span className="titleUser index">Edad:</span> </b> <span className="valueTitleBetterPerson"> {" "+person[1].age} años </span>
                                                        </li>
                                                        <li>
                                                            <b><span className="titleUser index">Experiencia:</span> </b> <span className="valueTitleBetterPerson"> {" "+person[1].experience} años </span>
                                                        </li>
                                                        <li >
                                                            <b><span className="calitifationstring titleUser index">Calificación: </span></b> <span className="valueTitleBetterPerson"> 4.3</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row" style={{ height: "43%" }}>
                                            <div className="col">
                                                <div className="col">
                                                    <button onClick={() => { openModal(person[1].id) }} data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Ver Perfil</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CorouselCardsPerson;
