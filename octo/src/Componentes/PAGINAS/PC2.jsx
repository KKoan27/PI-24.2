import React from "react";
import '../CompCss/PC2.css';
import Wave from '../../Imagens/Banner2.png';
import Logotipo from '../../Imagens/Logotipo.png';

function PC2() {
    return (
        <div className="Wave-page">

            <section className="banner">
                <img src={Wave} alt="PC 2" />
                <img className="Logo" src={Logotipo} alt="Logo" />
                <h1 className="Tilte-PC2">Personalize e torne o seu próprio O PC perfeito! ajustado ao seu estilo e desempenho.</h1>
            </section>

            <section className="specifications">
                <div className="spec-column">
                    <h2>Configuração Principal</h2>
                    <p>Processador: Intel Core i9 14900K 14ª geração</p>
                    <div className="options">
                        <button className="option-button2">Core i7</button>
                        <button className="option-button2">Core i9</button>
                    </div>
                    <p>Placa de vídeo: NVIDIA GeForce RTX 4070</p>
                    <div className="options">
                        <button className="option-button2">RTX 4070</button>
                        <button className="option-button2">4080 RTX</button>
                        <button className="option-button2">RTX 4090</button>
                    </div>
                    <p>Memória: 32GB DDR5 5200Mhz</p>
                    <div className="options">
                        <button className="option-button2">32GB</button>
                        <button className="option-button2">64GB</button>
                        <button className="option-button2">128GB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Armazenamento</h2>
                    <p>SSD 1TB NVME SN850</p>
                    <div className="options">
                        <button className="option-button2">1TB</button>
                        <button className="option-button2">2TB</button>
                        <button className="option-button2">4TB</button>
                    </div>
                    <p>HDD 2TB</p>
                    <div className="options">
                        <button className="option-button2">2TB</button>
                        <button className="option-button2">4TB</button>
                        <button className="option-button2">8TB</button>
                    </div>
                </div>

                <div className="spec-column">
                    <h2>Refrigeração</h2>
                    <p>Water Cooler NZXT Wave Elite 360</p>
                    <div className="options">
                        <button className="option-button2">Elite 360</button>
                    </div>
                </div>
            </section>

            <section className="product-description">
                <h1 className="product-title">PC GAMER <span className="Wave">Bluezão</span></h1>
                <div className="separator-wrapper">
                    <div className="separator white"></div>
                    <div className="separator gray"></div>
                </div>

                <p className="description-text">
                    Liberte a força das ondas com o Bluezão, um computador projetado para dominar todos os aspectos do desempenho e oferecer uma experiência de jogo única. Assim como as ondas que cortam o mar com imensa força e precisão, o Bluezão oferece uma performance que surge do abismo digital, com velocidade, confiança e inovação se unindo para criar uma máquina imbatível.
                    <br /><br />
                    Com placas de vídeo equipadas com Ray Tracing e DLSS, a imersão nos mundos virtuais será total. Seus gráficos são tão impressionantes quanto o vasto oceano, revelando cada detalhe com um realismo surpreendente e fluidez absoluta. Você será levado a novas profundidades, onde cada curva e ondulação do jogo se tornam uma experiência visual sem igual.
                    <br /><br />
                    As memórias DDR5 de até 5200MHz fazem o Bluezão surfar nas mais altas frequências, garantindo uma resposta rápida e eficiente que mantém seu desempenho sempre na crista da onda. Nada vai interromper sua jornada, com um barramento de dados que mantém tudo fluindo com agilidade.
                    <br /><br />
                    O SSD de última geração, com velocidades superiores a 7000MB por segundo, oferece transferências de dados instantâneas. Jogos e aplicativos são carregados de forma rápida e sem esforço, permitindo que você mergulhe de cabeça na ação em um piscar de olhos, sem jamais ser arrastado para a ressaca da espera.
                    <br /><br />
                    E com WiFi 6 e Bluetooth 5.2, você vai estar sempre conectado ao mundo virtual com a estabilidade e a velocidade de uma onda em alta mar, sem atrasos e com a confiança de uma conexão sólida e rápida.
                    <br /><br />
                    Liberte o poder do Bluezão e sinta a emoção de surfar na crista da inovação e do desempenho, navegando para a próxima era do gaming.
                </p>


            </section>
        </div>

    );
}

export default PC2;