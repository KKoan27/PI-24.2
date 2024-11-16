import React from 'react';
import '../CompCss/Login.css';
import Banner1 from '../../Imagens/Banner1.png';
import { Link, Element } from 'react-scroll';
import Logotipo from '../../Imagens/Logotipo.png';

const PC1 = () => {
  return (
    <div>
      {/* Primeira Seção - Home */}
      <Element name="home" className="home-section">
        <div className="home-content">
          <img src={Banner1} alt="PC Kraken" className="pc-image" />
          <button className="price-text">A partir de R$19,898.00</button>
        </div>
      </Element>

      {/* Segunda Seção - Personalização */}
      <Element name="customization" className="customization-section">
        <div className="customization-header">
          <div className="custom-icon">
            <img src={Logotipo} alt="OctoCore Icon" />
          </div>
          <h2>Personalize e torne o seu próprio! O PC perfeito, ajustado ao seu estilo e desempenho.</h2>
        </div>

        <div className="customization-options">
          <div className="config-category">
            <h3>Configuração Principais</h3>
            <div className="config-item">
              <strong>Processador</strong> Intel Core i9 14900KF 14ª geração
              <div className="options">
                <button className="option-button">Core i7</button>
                <button className="option-button">Core i9</button>
              </div>
            </div>

            <div className="config-item">
              <strong>Placa de vídeo</strong> NVIDIA GeForce RTX 4070 12GB
              <div className="options">
                <button className="option-button">RTX 4070 RTX</button>
                <button className="option-button">4080 RTX 4090</button>
              </div>
            </div>

            <div className="config-item">
              <strong>Memória</strong> 2× 16GB DDR5 5200Mhz
              <div className="options">
                <button className="option-button">32GB</button>
                <button className="option-button">64GB</button>
                <button className="option-button">128GB</button>
              </div>
            </div>
          </div>

          <div className="config-category">
            <h3>Armazenamento</h3>
            <div className="config-item">
              <strong>SSD</strong> 1TB NVME SN850
              <div className="options">
                <button className="option-button">1TB</button>
                <button className="option-button">2TB</button>
                <button className="option-button">4TB</button>
              </div>
            </div>

            <div className="config-item">
              <strong>HDD</strong> 2TB HDD
              <div className="options">
                <button className="option-button">2TB</button>
                <button className="option-button">4TB</button>
                <button className="option-button">8TB</button>
              </div>
            </div>
          </div>

          <div className="config-category">
            <h3>Refrigeração</h3>
            <div className="config-item">
              <strong>Water Cooler</strong> NZXT Kraken Elite 360 RL-KR36E-B1
              <div className="options">
                <button className="option-button">Elite 360</button>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default PC1;