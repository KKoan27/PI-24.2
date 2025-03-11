import React from 'react';
import Kraken from '../../Imagens/Banner1.png';
import Wave from '../../Imagens/Banner2.png'; 
import Dante from '../../Imagens/Banner3.png';
import '../CompCss/PCSGamer.css'; 

const PCSGamer = () => {
  return (
    <div className="pc1-container">
      {/* Banner de destaque */}
      <section className="banner">
        <img src= {Kraken} alt="PC Kraken" className="banner-image" />
        <div className="banner-text">
        <button className="btn-buy kraken-btn">A partir de R$19,898.00</button>
        </div>
      </section>
     

      {/* Banner Wave */}
      <section className="banner">
        <img src={Wave} alt="PC Wave" className="banner-image" />
        <div className="banner-text">
        <button className="btn-buy wave-btn">A partir de R$14,998.00</button>
        </div>
      </section>

      {/* Banner Dante */}
      <section className="banner">
        <img src={Dante} alt="PC Dante" className="banner-image" />
        <div className="banner-text">
        <button className="btn-buy dante-btn">A partir de R$12,998.00</button>
        </div>
      </section>
    </div>
  );
};

export default PCSGamer;