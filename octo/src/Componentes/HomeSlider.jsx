
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CompCss/HomeSlider.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import Banner1 from '../Imagens/Banner1.png';
import Banner2 from '../Imagens/Banner2.png';
import Banner3 from '../Imagens/Banner3.png';
import Banner4 from '../Imagens/Banner4.png';

const HomeSlider = () => {
    return (
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
          <img src={Banner1} alt="Slide 1" style={{width: '100%', height: 'auto', maxHeight: '640px', objectFit: 'cover'}} />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Banner2} alt="Slide 2" className="image-style" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Banner3} alt="Slide 3" className="image-style" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Banner4} alt="Slide 4" className="image-style" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };
  
  export default HomeSlider;