import React from 'react';
import { useParams } from 'react-router-dom';

const GamePage = () => {
  const { game } = useParams(); // Pega o nome do jogo da URL

  return (
    <div>
      <h2>Página do jogo: {game}</h2>
      {/* Aqui você pode personalizar a página para cada jogo */}
      <p>Informações sobre o {game}...</p>
    </div>
  );
};

export default GamePage;
