import Minecraft from '../../Imagens/Minecraft.png';
import Kraken from '../../Imagens/Kraken.png';
import Wave from '../../Imagens/Wave.png';
import Dante from '../../Imagens/Dante.png';
import Fortnite from '../../Imagens/Fortnite.png';
import Valorant from '../../Imagens/Valorant.png';
import Lol from '../../Imagens/Lol.png';
import CSGO from '../../Imagens/CSGO.png';
import Cyberpunk from '../../Imagens/Cyberpunk.png';
import Starfild from '../../Imagens/Starfild.png';
import GTA from '../../Imagens/GTA.png';
const gameData = {
    minecraft: {
        title: 'PC Kraken para Minecraft',
        bannerImage: Minecraft,
        description: 'Transforme sua experiência no Minecraft com o PC Kraken — desempenho extremo, gráficos deslumbrantes e jogabilidade sem limites.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i7 de 12ª geração ou superior' },
          { feature: 'Memória RAM', value: '16GB para performance de ponta' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3060 ou superior para gráficos de alta definição' },
        ],
        sections: [
          {
            title: 'Por que Minecraft exige um bom PC?',
            content: `
              Minecraft é um jogo que, apesar de seu visual simples à primeira vista, exige potência para rodar com gráficos detalhados, vastos mundos e mods pesados. Para uma experiência ininterrupta e sem quedas de desempenho, você precisa de uma máquina que entregue alta performance a cada jogada. O PC Kraken é projetado para fornecer tudo o que você precisa para explorar, construir e criar sem limitações.  
              Desempenho suave e gráficos impressionantes garantem que você nunca perca uma experiência imersiva enquanto constrói seus maiores projetos ou explora mundos infinitos.
            `,
            image: Kraken,
          },
          {
            title: 'Prepare-se para uma jogabilidade superior',
            content: `
              O PC Kraken para Minecraft foi projetado para entregar o máximo de desempenho e qualidade visual. Com um processador Intel Core i7 de última geração e uma placa de vídeo NVIDIA RTX 3060, você poderá rodar Minecraft com gráficos incríveis, mundos vastos e velocidade impressionante, sem travamentos. Jogabilidade suave e carregamento rápido garantem que sua experiência seja a melhor possível, seja jogando sozinho ou com seus amigos em servidores multiplayer.
            `,
          },
        ],
      },
      
  
      valorant: {
        title: 'PC Dante para Valorant',
        bannerImage: Valorant,
        description: 'Experimente o melhor desempenho em Valorant com um PC de alta performance, projetado para garantir uma experiência fluida e sem interrupções, com gráficos nítidos e uma taxa de FPS estável, essencial para jogos competitivos.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i7 de 10ª geração ou superior' },
          { feature: 'Memória RAM', value: '16GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3060 ou superior' },
        ],
        sections: [
          {
            title: 'Desempenho Competitivo para Valorant',
            content: 'Em jogos de tiro como Valorant, cada movimento e cada frame importam. Com este PC, você terá uma taxa de FPS ultra-alta, garantindo que seus reflexos rápidos e suas ações precisas sejam respondidos de maneira instantânea. Jogue com vantagens competitivas e experimente uma jogabilidade sem engasgos, mesmo nos momentos de maior ação.',
            image: Dante,
          },
          {
            title: 'Por que escolher um PC potente para Valorant?',
            content: `
              <p>
                Valorant é um jogo em que cada detalhe conta, e escolher o PC certo é crucial para ter uma vantagem competitiva. Com a configuração ideal, você experimenta gráficos nítidos e suaves, sem quedas de desempenho durante as partidas intensas.
              </p>
              <ul>
                <li><strong>Alta taxa de FPS:</strong> Jogue com mais fluidez e precisão, permitindo movimentos rápidos e responsivos.</li>
                <li><strong>Gráficos nítidos:</strong> Visualize cada detalhe do mapa e dos seus adversários com clareza, sem distorções gráficas.</li>
                <li><strong>Desempenho sem quedas:</strong> Evite travamentos e lags que podem prejudicar sua performance nas partidas.</li>
              </ul>
            `,
          },
        ],
      },
      
  
      fortnite: {
        title: 'PC Wave para Fortnite',
        bannerImage: Fortnite,
        description: 'Prepare-se para dominar Fortnite com um PC projetado para altas taxas de FPS e construção rápida. Com desempenho robusto e gráficos de alta qualidade, você terá a vantagem necessária para competir em nível profissional.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i9 de 10ª geração ou superior' },
          { feature: 'Memória RAM', value: '16GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3060 ou superior' },
        ],
        sections: [
          {
            title: 'Ação intensa e construção rápida',
            content: 'Fortnite exige um PC de alto desempenho para garantir construções rápidas e uma jogabilidade fluida durante os combates intensos. Com este PC, você terá uma resposta imediata e a capacidade de construir e lutar sem travamentos, tudo com gráficos detalhados e nítidos.',
            image: Wave,
          },
          {
            title: 'Desempenho e fluidez no Fortnite',
            content: `
              <p>
                Em Fortnite, a velocidade de construção e a fluidez da jogabilidade podem ser a diferença entre ganhar ou perder. Este PC é projetado para garantir que você execute comandos de forma ágil, construa rapidamente e lute sem interrupções, tudo isso enquanto mantém gráficos de alta qualidade, sem comprometer a performance.
              </p>
              <ul>
                <li><strong>Construção ágil:</strong> Experimente uma resposta rápida para suas construções e ações, sem engasgos.</li>
                <li><strong>Alta taxa de FPS:</strong> Garanta fluidez em todas as partidas, com gráficos nítidos e ação sem queda de quadros.</li>
                <li><strong>Desempenho sólido:</strong> Execute Fortnite no mais alto nível, mesmo com cenas rápidas e intensas, sem comprometimento na qualidade visual.</li>
              </ul>
            `,
          },
        ],
      },
  
      gtav: {
        title: 'PC Kraken para GTA V',
        bannerImage: GTA,
        description: 'Explore o vasto mundo de GTA V com gráficos impressionantes e jogabilidade fluida. Este PC Kraken garante que você aproveite ao máximo cada detalhe, com performance de ponta para uma experiência imersiva e sem interrupções.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i9 de 10ª geração ou superior' },
          { feature: 'Memória RAM', value: '16GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3070 ou superior' },
        ],
        sections: [
          {
            title: 'Mundo aberto com gráficos intensivos',
            content: 'GTA V oferece um dos mundos abertos mais complexos e detalhados da história dos videogames. Para aproveitar cada aspecto visual, desde as paisagens urbanas até os detalhes minuciosos das construções, é preciso de um PC poderoso que garanta desempenho de alto nível, mesmo nos momentos mais intensos de ação.',
            image: Kraken,
          },
          {
            title: 'Desempenho de ponta para GTA V',
            content: `
              <p>
                Com um mundo tão detalhado e dinâmico como o de GTA V, ter um PC que possa lidar com gráficos intensivos e uma grande quantidade de elementos simultâneos é essencial. O PC Kraken oferece a potência necessária para garantir jogabilidade suave, mesmo durante perseguições de alta velocidade, tiroteios intensos e ações explosivas.
              </p>
              <ul>
                <li><strong>Gráficos de alta qualidade:</strong> Experimente GTA V com texturas detalhadas, sombras realistas e iluminação de próxima geração, tudo sem comprometer a performance.</li>
                <li><strong>Desempenho estável:</strong> A alta taxa de FPS garante que você jogue de forma fluida, sem travamentos ou perda de quadros durante os momentos mais exigentes.</li>
                <li><strong>Experiência imersiva:</strong> Sinta-se dentro de Los Santos com gráficos nítidos e jogabilidade suave, seja explorando a cidade ou em ações intensas de combate.</li>
              </ul>
            `,
          },
        ],
      },
  
      cyberpunk2077: {
        title: 'PC Wave para Cyberpunk 2077',
        bannerImage: Cyberpunk,
        description: 'Desfrute de Cyberpunk 2077 com gráficos deslumbrantes e uma performance sem falhas. O PC Kraken é projetado para garantir a melhor experiência em um dos jogos mais visualmente desafiadores da atualidade.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i9 de 10ª geração ou superior' },
          { feature: 'Memória RAM', value: '32GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3080 ou superior' },
        ],
        sections: [
          {
            title: 'Gráficos de próxima geração',
            content: 'Cyberpunk 2077 é um dos jogos mais visualmente exigentes do mercado. Seus gráficos avançados, que incluem iluminação dinâmica e texturas ultrarrealistas, demandam uma máquina poderosa. O PC Kraken garante que você tenha a melhor qualidade gráfica e uma jogabilidade fluida, mesmo nos cenários mais detalhados e movimentados de Night City.',
            image: Wave,
          },
          {
            title: 'Desempenho estável em um mundo aberto dinâmico',
            content: `
              <p>
                Em Cyberpunk 2077, você explorará Night City com gráficos complexos e ambientes altamente detalhados, que exigem muito da sua máquina. O PC Kraken, equipado com processadores e placas de vídeo topo de linha, garante desempenho contínuo e uma experiência imersiva sem quedas de FPS, permitindo que você aproveite todos os detalhes do mundo aberto, das missões intensas aos momentos mais tranquilos.
              </p>
              <ul>
                <li><strong>Iluminação Ray Tracing:</strong> Aproveite os efeitos de iluminação realistas com Ray Tracing, aprimorando ainda mais a experiência visual.</li>
                <li><strong>Texturas detalhadas:</strong> Explore cada esquina de Night City com texturas de alta qualidade e uma riqueza visual que só o PC Kraken pode oferecer.</li>
                <li><strong>Taxa de FPS constante:</strong> Jogue de forma fluida em qualquer situação, mesmo nas áreas mais densas e com mais ação.</li>
              </ul>
            `,
          },
        ],
      },
  
      leagueoflegends: {
        title: 'PC Kraken para League of Legends',
        bannerImage: Lol,
        description: 'Experimente League of Legends com um PC rápido, responsivo e sem lag. Garanta uma jogabilidade fluida e uma performance excelente nas partidas mais competitivas.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i5 de 10ª geração ou superior' },
          { feature: 'Memória RAM', value: '8GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA GTX 1050 ou superior' },
        ],
        sections: [
          {
            title: 'Desempenho em partidas competitivas',
            content: 'League of Legends exige uma alta taxa de FPS e um sistema altamente responsivo para garantir uma experiência sem atraso, essencial em partidas competitivas. O PC Kraken oferece tudo isso, permitindo que você jogue com precisão e agilidade, sem se preocupar com quedas de performance.',
            image: Kraken,
          },
          {
            title: 'A vantagem competitiva que você merece',
            content: `
              <p>
                A diferença entre a vitória e a derrota em League of Legends muitas vezes está no desempenho do seu PC. O Kraken é projetado para entregar a performance ideal, garantindo que você tenha um PC ágil, sem atrasos, com taxa de FPS elevada e gráficos nítidos, para que você possa se concentrar completamente nas partidas e se destacar no jogo.
              </p>
              <ul>
                <li><strong>Taxa de FPS elevada:</strong> Uma taxa de quadros consistente é crucial para uma experiência sem interrupções, garantindo que você reaja rapidamente a cada movimento do adversário.</li>
                <li><strong>Tempo de resposta rápido:</strong> O Kraken é projetado para eliminar qualquer latência, dando a você a vantagem em momentos decisivos do jogo.</li>
                <li><strong>Alta estabilidade em partidas intensas:</strong> Mesmo durante batalhas intensas, o Kraken mantém a estabilidade e o desempenho necessário para garantir uma experiência fluida.</li>
              </ul>
            `,
          },
        ],
      },
  
      starfield: {
        title: 'PC para Starfield',
        bannerImage: Starfild,
        description: 'Explore o vasto universo de Starfield com um PC poderoso, projetado para gráficos incríveis e desempenho sem falhas. Viva uma experiência de exploração espacial sem limites!',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i7 de 12ª geração ou superior' },
          { feature: 'Memória RAM', value: '16GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA RTX 3070 ou superior' },
        ],
        sections: [
          {
            title: 'Exploração espacial sem limites',
            content: 'Starfield é um jogo que exige hardware de ponta para rodar o vasto universo e suas incríveis texturas de forma fluída. Com o PC Kraken, você terá gráficos impressionantes, mantendo a performance sem falhas, permitindo uma imersão completa no jogo.',
            image: Dante,
          },
          {
            title: 'A experiência de um universo aberto',
            content: `
              <p>
                Em Starfield, a exploração espacial vai muito além do comum, e a qualidade dos gráficos faz toda a diferença. Para aproveitar ao máximo o jogo, é essencial um PC com uma placa de vídeo potente, como a NVIDIA RTX 3070, que oferece desempenho ideal para texturas de alta qualidade e mundos imersivos.
              </p>
              <ul>
                <li><strong>Texturas de alta definição:</strong> Starfield possui um universo vasto, e com o PC Kraken, você pode explorar cada detalhe com clareza e riqueza de cores.</li>
                <li><strong>Gráficos realistas:</strong> A combinação do Intel Core i7 de 12ª geração com a NVIDIA RTX 3070 garante uma performance impressionante, sem comprometer a fluidez durante as aventuras espaciais.</li>
                <li><strong>Desempenho sem falhas:</strong> Mesmo nos momentos mais intensos de exploração e combate, o Kraken mantém a performance estável, sem travamentos ou quedas de FPS.</li>
              </ul>
            `,
          },
        ],
      },      
  
      csgo: {
        title: 'PC para CS:GO',
        bannerImage: CSGO,
        description: 'CS:GO exige precisão e alta taxa de quadros. Um PC poderoso pode fazer toda a diferença nas partidas competitivas, garantindo a fluidez necessária para se destacar no jogo.',
        specifications: [
          { feature: 'Processador', value: 'Intel Core i9 ou superior' },
          { feature: 'Memória RAM', value: '16GB ou mais' },
          { feature: 'Placa de vídeo', value: 'NVIDIA GTX 1050 ou superior' },
        ],
        sections: [
          {
            title: 'Competitividade e fluidez',
            content: 'CS:GO é um jogo altamente competitivo, e para ter a vantagem sobre os adversários, você precisa de uma máquina que consiga manter a fluidez e a precisão com uma alta taxa de FPS. Com o PC Kraken, você terá a vantagem de um sistema rápido e sem engasgos, garantindo respostas instantâneas e gráficos nítidos.',
            image: Dante,
          },
          {
            title: 'Desempenho ideal para partidas competitivas',
            content: `
              <p>
                A precisão é fundamental em CS:GO. Escolha um PC que ofereça uma taxa de quadros estável e alta, garantindo que você consiga tomar decisões rápidas com gráficos nítidos e sem quedas de desempenho.
              </p>
              <ul>
                <li><strong>Desempenho sem falhas:</strong> O Intel Core i9 combinado com a NVIDIA GTX 1050 proporciona uma performance suave, até nos momentos mais intensos das partidas.</li>
                <li><strong>Alta taxa de FPS:</strong> Com 16GB de RAM e a placa gráfica indicada, você experimentará uma jogabilidade fluída, sem travamentos ou delay, essencial para partidas de alta intensidade.</li>
                <li><strong>Visual preciso:</strong> A fluidez nas animações e o tempo de resposta serão perfeitos, permitindo que você reaja com agilidade às mudanças de cenário e nos confrontos diretos com o adversário.</li>
              </ul>
            `,
          },
        ],
      }
    };      
  
  export default gameData;
  