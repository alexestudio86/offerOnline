import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './header.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import slide01 from '../assets/media/slide_01.jpg';
import slide02 from '../assets/media/slide_02.jpg';
import slide03 from '../assets/media/slide_03.jpg';
import slide04 from '../assets/media/slide_04.jpg';


export function Header ( ){

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1500)}s`;
    };

    return (
        <div className='row'>
            <div className="col-md-12">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide01} alt="Slide 01" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide02} alt="Slide 02" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide03} alt="Slide 03" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide04} alt="Slide 04" />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}