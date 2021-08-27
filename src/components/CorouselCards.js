import React from 'react';
import './style/corouselCards.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const CorouselCards = () => {

  return (
    <div className="containerCarousel">
      <Swiper
        spaceBetween={3}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%", height: 259 }}
      >
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Zapatero los sabados</p>
            </div>
            <div className="bodyCardJob">
              <div className="description">
                <p>
                  Se busca zapatero para trabajar los
                  sabados este mes de agosto...
                </p>
                <small>publicado 2 dias atras</small>
              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Mujer de aseo</p>
            </div>
            <div className="bodyCardJob">
              <div className="description">
                <p>
                  Busco a una mujer para que me haga
                  el aseo general en mi casa...
                </p>
                <small>publicado 3 dias atras</small>

              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Desarrollador ayudante</p>
            </div>
            <div className="bodyCardJob">
              <div className="description">
                <p>
                  Estoy buscando un desarrollador con
                  conocimientos en node ......
                </p>
                <small>publicado 2 dias atras</small>
              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Conductor para este sábado</p>
            </div>

            <div className="bodyCardJob">
              <div className="description">

                <p>
                  Busco un conductor para ir a la piedra
                  del peñol este sabado to...
                </p>
                <small>publicado hoy</small>

              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Medico para revision</p>
            </div>
            <div className="bodyCardJob">
              <div className="description">
                <p>
                  Necesito un médico para que me haga
                  unos controles 1 vez a...
                </p>
                <small>publicado ayer</small>
              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="betterJobs" >
          <div className="cardBetterJob">
            <div className="titleJobCard" >
              <p className="titleText">Zapatero los sabados</p>
            </div>
            <div className="bodyCardJob">
              <div className="description">
                <p>
                  Se busca zapatero para trabajar los
                  sabados este mes de agosto...
                </p>
                <small>publicado 4 dias atras</small>
              </div>
              <button>Ver mas información</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )

}

export default CorouselCards;