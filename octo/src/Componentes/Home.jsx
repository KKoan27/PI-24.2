import { useState } from 'react';  // Importando useState para gerenciar o estado
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CompCss/Home.css';
import './CompCss/GamePage.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import Banner1 from '../Imagens/Banner1.png';
import Banner2 from '../Imagens/Banner2.png';
import Banner3 from '../Imagens/Banner3.png';
import Minecraft from '../Imagens/Minecraft.png';
import Fortnite from '../Imagens/Fortnite.png';
import Valorant from '../Imagens/Valorant.png';
import Lol from '../Imagens/Lol.png';
import CSGO from '../Imagens/CSGO.png';
import Cyberpunk from '../Imagens/Cyberpunk.png';
import Starfild from '../Imagens/Starfild.png';
import GTA from '../Imagens/GTA.png';

const Home = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qual resposta está ativa

  const handleSlideClick = (path) => {
    navigate(path); // Navega para a página do PC ao clicar no slide
  };

  // Função para alternar a visibilidade das respostas da FAQ
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna a visibilidade da resposta
  };


const games = [
  { name: 'Minecraft', img: Minecraft, link: '/minecraft' },
  { name: 'Fortnite', img: Fortnite, link: '/fortnite' },
  { name: 'Valorant', img: Valorant, link: '/valorant' },
  { name: 'League Of Legends', img: Lol, link: '/leagueoflegends' },
  { name: 'GTA V', img: GTA, link: '/gtav' },
  { name: 'CS:GO', img: CSGO, link: '/csgo' },
  { name: 'Cyberpunk 2077', img: Cyberpunk, link: '/cyberpunk2077' },
  { name: 'Starfield', img: Starfild, link: '/starfield' },
]
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
          <img src={Banner1} alt="Slide 1" style={{ width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick('/pc2')}>
          <img src={Banner2} alt="Slide 2" style={{ width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick('/pc3')}>
          <img src={Banner3} alt="Slide 3" style={{ width: '100%', height: 'auto', maxHeight: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>

        {/* Seção de jogos */}
        <div className="games-container">
          <h1>O melhor PC Gamer é OctoCore</h1>
          <p>As máquinas mais poderosas com SSD 4.0, GeForce RTX e 
          processadores Intel de 14ª geração. A melhor garantia e qualidade de produção com frete grátis para todo Brasil.</p>
        <h3>Descubra o PC Gamer ideal através do seu jogo favorito:</h3>
        <div className="games-list">
          {games.map((game, index) => (
            <div className="game-item" key={index}>
              <img src={game.img} alt={game.name} />
              <Link to={game.link}>{game.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-container">
        <h3>Dúvidas mais comuns</h3>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <p>Qual PC Gamer é ideal para mim?</p>
            <span className="arrow">{activeIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p><strong>Kraken:</strong> Ideal para jogar em Full HD com boa performance. Placa de vídeo padrão pode limitar qualidade Ultra em jogos pesados.</p>
              <p><strong>Wave:</strong> Melhor para quem quer streaming e performance máxima, com placas de vídeo Ampere da NVIDIA que suportam Ray Tracing e DLSS.</p>
              <p><strong>Dante:</strong> Melhor configuração para desempenho em 4K e jogos pesados, combinando os melhores processadores e placas de vídeo.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <p>Quanto custa um PC Gamer?</p>
            <span className="arrow">{activeIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p><strong>Kraken:</strong> A partir de R$ 12.402,00.</p>
              <p><strong>Wave:</strong> A partir de R$ 12.690,00.</p>
              <p><strong>Dante:</strong> A partir de R$ 18.990,00.</p>
              <p>Preço pode variar conforme as necessidades e tipo de jogos.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <p>Como montar um PC Gamer?</p>
            <span className="arrow">{activeIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Utilize o configurador "Monte seu PC" para escolher e personalizar componentes como processador, memória e placa de vídeo, garantindo compatibilidade.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <p>Qual o prazo de entrega e política de frete?</p>
            <span className="arrow">{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>Frete gratuito para todo o Brasil, com transporte seguro. Prazo de produção: até 5 dias úteis. Prazo de entrega: cerca de 3 dias úteis para capitais e até 7 dias úteis para áreas internas.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(4)}>
            <p>Qual o melhor PC Gamer?</p>
            <span className="arrow">{activeIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 4 && (
            <div className="faq-answer">
              <p><strong>Wave:</strong> Considerada a melhor configuração, projetada para jogar e streamar títulos pesados com excelente desempenho.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(5)}>
            <p>Qual o prazo de garantia?</p>
            <span className="arrow">{activeIndex === 5 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 5 && (
            <div className="faq-answer">
              <p>1 ano de garantia em componentes e suporte técnico vitalício. Opção de Computador Reserva disponível durante manutenção.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Home;
