import React from "react";
import '../CompCss/PC3.css';
import Dante from '../../Imagens/Banner3.png';
import Logotipo from '../../Imagens/Logotipo.png';

function PC3() {
    return (
        <div className="Dante-page">

            <section className="banner">
                <img src={Dante} alt="PC 3" />
                <img className="Logo" src={Logotipo} alt="Logo" />
                <h1 className="Tilte-PC1">Personalize e torne o seu próprio O PC perfeito! ajustado ao seu estilo e desempenho.</h1>
            </section>

            <section className="specifications">
                <div className="spec-column">
                    <h2>Configuração Principal</h2>
                    <p>Processador: Intel Core i9 14900K 14ª geração</p>
                    <div className="options">
                        <button className="option-button3">Core i7</button>
                        <button className="option-button3">Core i9</button>
                    </div>
                    <p>Placa de vídeo: NVIDIA GeForce RTX 4070</p>
                    <div className="options">
                        <button className="option-button3">RTX 4070</button>
                        <button className="option-button3">4080 RTX</button>
                        <button className="option-button3">RTX 4090</button>
                    </div>
                    <p>Memória: 32GB DDR5 5200Mhz</p>
                    <div className="options">
                        <button className="option-button3">32GB</button>
                        <button className="option-button3">64GB</button>
                        <button className="option-button3">128GB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Armazenamento</h2>
                    <p>SSD 1TB NVME SN850</p>
                    <div className="options">
                        <button className="option-button3">1TB</button>
                        <button className="option-button3">2TB</button>
                        <button className="option-button3">4TB</button>
                    </div>
                    <p>HDD 2TB</p>
                    <div className="options">
                        <button className="option-button3">2TB</button>
                        <button className="option-button3">4TB</button>
                        <button className="option-button3">8TB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Refrigeração</h2>
                    <p>Water Cooler NZXT Kraken Elite 360</p>
                    <div className="options">
                        <button className="option-button3">Elite 360</button>
                    </div>
                </div>
            </section>

            <section className="product-description">
                <h1 className="product-title">PC GAMER <span className="kraken">KRAKEN</span></h1>
                <div className="separator-wrapper">
                    <div className="separator white"></div>
                    <div className="separator gray"></div>
                </div>

                <p className="description-text">
                    Desça ao abismo do desempenho com o Dante Inferno, um computador projetado para desafiar os limites da tecnologia e te levar aos confins do gaming. Com placas de vídeo de última geração, Ray Tracing e DLSS, cada detalhe é intensamente realista, trazendo mundos virtuais à vida com a força das chamas infernais.
                    <br /><br />
                    Equipado com memórias DDR5 de até 5200MHz, o Dante Inferno oferece velocidade e precisão imbatíveis, enquanto seu SSD de última geração, com transferências acima de 7000MB por segundo, elimina qualquer espera, fazendo tudo acontecer em um piscar de olhos.
                    <br /><br />
                    Com WiFi 6 e Bluetooth 5.2, sua conexão será rápida e estável, sempre pronta para o próximo desafio.
                    <br /><br />
                    Liberte-se das limitações e entre no Dante Inferno – onde o desempenho não conhece fronteiras.
                </p>

            </section>
        </div>

    );
}

export default PC3;