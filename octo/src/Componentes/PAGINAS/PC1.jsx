import React from "react";
import '../CompCss/PC1.css';
import Kraken from '../../Imagens/Banner1.png';
import Logotipo from '../../Imagens/Logotipo.png';

function PC1() {
    return (
        <div className="kraken-page">

            <section className="banner">
                <img src={Kraken} alt="PC 1" />
                <img className="Logo" src={Logotipo} alt="Logo" />
                <h1 className="Tilte-PC1">Personalize e torne o seu próprio O PC perfeito! ajustado ao seu estilo e desempenho.</h1>
            </section>

            <section className="specifications">
                <div className="spec-column">
                    <h2>Configuração Principal</h2>
                    <p>Processador: Intel Core i9 14900K 14ª geração</p>
                    <div className="options">
                        <button className="option-button">Core i7</button>
                        <button className="option-button">Core i9</button>
                    </div>
                    <p>Placa de vídeo: NVIDIA GeForce RTX 4070</p>
                    <div className="options">
                        <button className="option-button">RTX 4070</button>
                        <button className="option-button">4080 RTX</button>
                        <button className="option-button">RTX 4090</button>
                    </div>
                    <p>Memória: 32GB DDR5 5200Mhz</p>
                    <div className="options">
                        <button className="option-button">32GB</button>
                        <button className="option-button">64GB</button>
                        <button className="option-button">128GB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Armazenamento</h2>
                    <p>SSD 1TB NVME SN850</p>
                    <div className="options">
                        <button className="option-button">1TB</button>
                        <button className="option-button">2TB</button>
                        <button className="option-button">4TB</button>
                    </div>
                    <p>HDD 2TB</p>
                    <div className="options">
                        <button className="option-button">2TB</button>
                        <button className="option-button">4TB</button>
                        <button className="option-button">8TB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Refrigeração</h2>
                    <p>Water Cooler NZXT Kraken Elite 360</p>
                    <div className="options">
                        <button className="option-button">Elite 360</button>
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
                    Desencadeie o poder das profundezas com o Kraken, um computador projetado para dominar todas as dimensões do desempenho. Como a lenda do monstro marinho que emerge do abismo, o Kraken traz à tona uma experiência de jogo inigualável, onde confiabilidade, velocidade e design de vanguarda se encontram para criar uma máquina imbatível.
                    <br /><br />
                    Com o desempenho imbatível das placas de vídeo com Ray Tracing e DLSS, sua jornada pelos mundos virtuais será inebriante, com gráficos deslumbrantes e realismo impressionante. Cada detalhe ganha vida em alta definição, graças à potência das tecnologias mais avançadas.
                    <br /><br />
                    Equipado com memórias DDR5, o Kraken eleva o seu gameplay a outro nível, com módulos de até 5200MHz de frequência, garantindo o máximo desempenho no barramento de dados. Sinta a velocidade inacreditável do SSD de última geração, com transferências de dados superiores a 7000MB por segundo.
                    <br /><br />
                    Seja para abrir jogos ou carregar aplicações, o Kraken faz tudo acontecer num piscar de olhos. Com WiFi 6 e Bluetooth 5.2, você estará sempre conectado à velocidade da luz, com mínima latência e máxima estabilidade, pronto para qualquer desafio online.
                    <br /><br />
                    Liberte o poder do Kraken e mergulhe de cabeça na próxima era do gaming.
                </p>

            </section>
        </div>

    );
}

export default PC1;