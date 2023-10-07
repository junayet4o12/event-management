import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import { EffectCube } from 'swiper/modules';




import img1 from '../banner1.jpg'
import img2 from '../banner2.jpg'
import img3 from '../banner3.jpg'
import img4 from '../banner4.jpg'
import img5 from '../banner5.jpg'
import img6 from '../banner6.jpg'
const Banner = () => {

    return (
        <div className='max-w-7xl mx-auto'>

            <div >
                <Swiper
                    modules={[Navigation,  Scrollbar, A11y, EffectCube, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    effect="cube"
                    
                    scrollbar={{ draggable: true }}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img6} alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;