import React from "react";
import "../CompCss/Ajuda.css";
import { Link } from "react-router-dom";

const Ajuda = () => {
    return (
        <div className="ajuda-container">
            <header className="ajuda-header">
                <h1>Central de Ajuda <span>OctoCore</span></h1>
                <p>Explore dicas, tutoriais e respostas para aproveitar ao máximo seu setup gamer personalizado.</p>
            </header>

            <section className="ajuda-section">
                <h2>🚀 Como Comprar</h2>
                <ul>
                    <li>Explore a <Link to="/">home</Link> e navegue pelas seções como "PCs Gamer" ou "Monte seu PC".</li>
                    <li>Escolha um modelo pronto ou personalize o seu.</li>
                    <li>Clique em <strong>"Comprar"</strong> e acesse o carrinho para revisão.</li>
                    <li>Finalize com seu login, endereço e pagamento.</li>
                </ul>
                <p>Dica: Usar o botão "Monte seu PC" permite personalizar desde a placa-mãe até os periféricos!</p>
            </section>

            <section className="ajuda-section">
                <h2>🧩 Montando seu PC</h2>
                <p>Essa é a função principal da OctoCore. Aqui está como aproveitar:</p>
                <ul>
                    <li>Ao clicar em <strong>"Monte seu PC"</strong>, você será guiado por etapas sequenciais: Placa-mãe, Processador, Memória, GPU, Armazenamento, Fonte, Gabinete, e Periféricos.</li>
                    <li>Cada etapa possui filtros e compatibilidade automática com o item anterior.</li>
                    <li>Você pode visualizar o preço atualizado em tempo real conforme monta seu setup.</li>
                    <li>O sistema impede combinações incompatíveis, garantindo montagem segura.</li>
                    <li>Ao final, é possível salvar a configuração, adicionar ao carrinho ou compartilhar com um amigo.</li>
                </ul>
                <p>Quer ajuda para escolher? Use o <strong>Chatbot</strong> disponível no canto inferior da tela!</p>
            </section>

            <section className="ajuda-section">
                <h2>🧠 Dúvidas Frequentes</h2>
                <div className="faq-item">
                    <h3>❓ Posso alterar um PC já comprado?</h3>
                    <p>Antes da montagem iniciar, sim! Entre em contato com suporte em até 24h após a compra.</p>
                </div>
                <div className="faq-item">
                    <h3>❓ Quais são as formas de pagamento?</h3>
                    <p>Cartão de crédito, boleto, Pix ou parcelamento até 12x sem juros.</p>
                </div>
                <div className="faq-item">
                    <h3>❓ Como rastrear meu pedido?</h3>
                    <p>Após a confirmação do pagamento, acesse <strong>"Minha Conta" &gt; "Meus Pedidos"</strong> e clique em "Rastrear".</p>
                </div>
                <div className="faq-item">
                    <h3>❓ O que fazer se um componente vier com defeito?</h3>
                    <p>Todos os itens têm garantia de 12 meses. Entre em contato pelo WhatsApp ou Email com número do pedido e uma foto/vídeo do problema.</p>
                </div>
            </section>

            <section className="ajuda-section">
                <h2>🔐 Conta e Segurança</h2>
                <p>Mantenha sua conta protegida:</p>
                <ul>
                    <li>Use senhas fortes e únicas.</li>
                    <li>Você pode <Link to="/esqueci-senha">recuperar sua senha</Link> a qualquer momento.</li>
                    <li>Se notar algo suspeito, altere sua senha imediatamente.</li>
                </ul>
            </section>

            <section className="ajuda-section">
                <h2>🛡️ Garantia, Trocas e Devoluções</h2>
                <ul>
                    <li>Todos os PCs têm <strong>12 meses de garantia</strong> com assistência técnica especializada.</li>
                    <li>Você pode solicitar devolução em até 7 dias corridos após o recebimento.</li>
                    <li>O frete reverso é por nossa conta em caso de defeito.</li>
                </ul>
            </section>

            <section className="ajuda-section">
                <h2 className="ajuda-titulo">🤖 Chatbot OctoBot</h2>
                <p className="ajuda-texto">
                    O <strong>OctoBot</strong> é o nosso assistente virtual inteligente! Ele está disponível no canto inferior direito do site para te ajudar com:
                </p>
                <ul className="ajuda-lista">
                    <li>📦 Dúvidas sobre modelos como <strong>Kraken, Wave e Dante</strong></li>
                    <li>🧩 Ajuda na montagem do seu PC</li>
                    <li>💳 Informações sobre pagamentos e prazos</li>
                    <li>🔁 Status do seu pedido ou entrega</li>
                    <li>🛠️ Suporte técnico e orientações básicas</li>
                </ul>
                <p className="ajuda-texto">
                    Basta clicar no ícone do OctoBot e digitar sua pergunta. Se ele não souber, um atendente humano continua a conversa!
                </p>
            </section>
        </div>
    );
};

export default Ajuda;
