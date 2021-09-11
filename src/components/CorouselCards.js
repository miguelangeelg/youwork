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
    "postedDate": "publicado 2 dias atras"
  },
  "2": {
    "id": "2",
    "title": "Aseadora",
    "description": "Busco una mujer para que me haga el aseo general en mi casa...",
    "postedDate": "publicado 3 dias atras"
  },
  "3": {
    "id": "3",
    "title": "Desarrollador ayudante",
    "description": "Necesito un desarrollador con conocimientos en node...",
    "postedDate": "publicado 3 dias atras"
  },
  "4": {
    "id": "4",
    "title": "Conductor para este sabado",
    "description": "Busco un conductor para ir a la piedra del peñon el saba...",
    "postedDate": "publicado hoy"
  },
  "5": {
    "id": "5",
    "title": "Médico para revisión",
    "description": "Necesito un médico para que me diagnostique...",
    "postedDate": "publicado ayer"
  }
})


const CorouselCards = (props) => {

  const  {jobSelected, modalType} = props;
  
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
        style={{ width: "100%", height: 259 }}
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
                          <p>
                            {job[1].description}
                          </p>
                          <small>{job[1].postedDate}</small>
                        </div>

                      </div>
                    </div>
                    <div className="row" style={{ display: "flex", alignContent: "center", textAlign: "center", height: "24%" }}>
                      <div className="col">
                        <button className="seeMoreInfoCardJob" onClick={() => { openModal(job[1].id) }} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" >Ver mas información</button>
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

export default CorouselCards;