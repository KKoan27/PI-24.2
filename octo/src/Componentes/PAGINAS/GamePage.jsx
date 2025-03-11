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
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '300px',
          borderRadius: '10px', 
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
            <div className="image-container" style={{ display: 'flex', justifyContent: 'center', }}>
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%', 
                  maxWidth: '600px', 
                  height: 'auto', 
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
