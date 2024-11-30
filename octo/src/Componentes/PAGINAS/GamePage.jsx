import React from 'react';
import { useParams } from 'react-router-dom';
import gameData from './GameData';
import '../CompCss/GamePage.css';

const GamePage = () => {
  const { game } = useParams(); // Obtém o nome do jogo da URL
  const gameInfo = gameData[game.toLowerCase()]; // Converte o nome para minúsculo para buscar no objeto

  if (!gameInfo) {
    return <h2>Jogo não encontrado!</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(${gameInfo.bannerImage})`,
          backgroundSize: 'cover', // Garante que a imagem ocupe toda a área sem distorcer
          backgroundPosition: 'center', // Centraliza a imagem no container
          height: '300px', // Altura fixa para o banner
          borderRadius: '10px', // Bordas arredondadas
          marginBottom: '20px',
        }}
      ></div>

      {/* Título e descrição */}
      <h1>{gameInfo.title}</h1>
      <p>{gameInfo.description}</p>

      {/* Especificações */}
      <h3>Especificações recomendadas</h3>
      <ul>
        {gameInfo.specifications.map((spec, index) => (
          <li key={index}>
            <strong>{spec.feature}:</strong> {spec.value}
          </li>
        ))}
      </ul>

      {/* Seções dinâmicas */}
      {gameInfo.sections.map((section, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <h3>{section.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
          {section.image && (
            <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%', // Limita a largura máxima da imagem ao tamanho do container
                  maxWidth: '600px', // Define um limite máximo para a largura
                  height: 'auto', // Mantém a proporção da imagem
                  marginTop: '10px',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GamePage;
