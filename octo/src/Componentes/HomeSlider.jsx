// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; 

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

const HomeSlider = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleSlideClick = (path) => {
      navigate(path); // Navega para a página do PC ao clicar no slide
  };
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
          <SwiperSlide onClick={() => handleSlideClick('/pc1')}>
          <img src={Banner1} alt="Slide 1" style={{width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover'}} />
          </SwiperSlide>
          <SwiperSlide onClick={() => handleSlideClick('/pc2')}>
          <img src={Banner2} alt="Slide 2"  style={{width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover'}} />
          </SwiperSlide>
          <SwiperSlide onClick={() => handleSlideClick('/pc3')} >
          <img src={Banner3} alt="Slide 3"  style={{width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover'}} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };
  
  export default HomeSlider;