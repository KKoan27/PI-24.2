import React  from "react";
import Kraken from '../../Imagens/Kraken.png';
function PC1() {
  return (
    <div className="kraken-page">
      
      <section className="banner">
        <img src={Kraken} alt="PC 1" />
        <h1 className="title">ABYSAAL</h1>
        <h1>KRAKEN</h1>
        <p>Personalize e torne o seu próprio! O PC perfeito, ajustado ao seu estilo e desempenho.</p>
      </section>

      <section className="specifications">
        <div className="spec-column">
          <h2>Configuração Principal</h2>
          <p>Processador: Intel Core i9 14900K 14ª geração</p>
          <p>Placa de vídeo: NVIDIA GeForce RTX 4070</p>
          <p>Memória: 32GB DDR5 5200Mhz</p>
        </div>
        <div className="spec-column">
          <h2>Armazenamento</h2>
          <p>SSD 1TB NVME SN850</p>
          <p>HDD 2TB</p>
        </div>
        <div className="spec-column">
          <h2>Refrigeração</h2>
          <p>Water Cooler NZXT Kraken Elite 360</p>
        </div>
      </section>

      <section className="description">
        <h2>PC GAMER KRAKEN</h2>
        <p>Desencadeie o poder das profundezas com o Kraken...</p>
      </section>

    </div>
  );
}

export default PC1;