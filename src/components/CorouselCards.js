import React from 'react';
import './style/corouselCards.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import $ from 'jquery';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


let jobs = Object.entries({
  "1": {
    "id": "1",
    "title": "Zapatero Los Sabados",
    "description": "Se busca zapatero para trabajar los sabados este mes de agosto...",
    "date": "04/10/2021",
    "salary": "45.000",
    "location": "Medellín, Antioquia",
    "employer": "Manuel Medrano",
    "employerScore": "4.5",
    "postedDate": "publicado 2 dias atras"
  },
  "2": {
    "id": "2",
    "title": "Aseadora",
    "description": "Busco una mujer para que me haga el aseo general en mi casa...",
    "date": "26/10/2021",
    "salary": "35.000",
    "location": "Medellín, Antioquia",
    "employer": "Jaime Rodriguez",
    "employerScore": "4.9",
    "postedDate": "publicado 3 dias atras"
  },
  "3": {
    "id": "3",
    "title": "Desarrollador ayudante",
    "date": "29/11/2021",
    "salary": "50.000",
    "location": "Bello, Antioquia",
    "employer": "Miguel Zapata",
    "employerScore": "5.0",
    "description": "Necesito un desarrollador con conocimientos en node...",
    "postedDate": "publicado 3 dias atras"
  },
  "4": {
    "id": "4",
    "title": "Conductor para este sabado",
    "date": "23/12/2021",
    "salary": "240.000",
    "location": "Medellín, Antioquia",
    "employer": "Wilson Canabrea",
    "employerScore": "3.9",
    "description": "Busco un conductor para ir a la piedra del peñon el saba...",
    "postedDate": "publicado hoy"
  },
  "5": {
    "id": "5",
    "title": "Médico para revisión",
    "date": "16/09/2021",
    "salary": "23.000",
    "location": "Medellín, Antioquia",
    "employer": "Santiago Orrego",
    "employerScore": "4.5",
    "description": "Necesito un médico para que me diagnostique...",
    "postedDate": "publicado ayer"
  }
})


const CorouselCards = (props) => {

  const { jobSelected, modalType } = props;

  // useEffect(() => {

  // }, [])

  const openModal = (e) => {
    modalType("job");
    let job;
    jobs.forEach(element => {
      if (element[1].id === e) {
        job = element[1];
        return;
      }
    });
    jobSelected(job);
  }

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

        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%", height: 350 }}
      >
        {
          jobs.map((job) => {
            return (
              <SwiperSlide className="betterJobs" key={job[1].id} >
                <div className="cardBetterJob">
                  <div className="grid" style={{ height: "100%" }}>
                    <div className="row">
                      <div className="col">
                        <div className="titleJobCard" >
                          <p className="titleText">{job[1].title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="description">
                          <div className="descriptionTitle">Descripción:</div>
                          <p>
                            {job[1].description}
                          </p>
                          <div className="divItemsCardJob">
                            <i className='bx bxs-location-plus'></i>
                            Medellín
                          </div>
                          <div className="divItemsCardJob">
                            <i className='bx bxs-calendar'></i>
                              Fecha para trabajar: 2021-10-23
                          </div>
                          <div className="divItemsCardJob">
                             <i className='bx bx-dollar'></i>
                              32.000 COP X Hora
                          </div>

                          <small>{job[1].postedDate}</small>
                        </div>

                      </div>
                    </div>
                    <div className="divBtnCardJob">
                      <button className="seeMoreInfoCardJob" onClick={() => { openModal(job[1].id) }} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" >Ver mas información</button>
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

export default CorouselCards;