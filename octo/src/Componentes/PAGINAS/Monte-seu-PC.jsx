import React, { useState } from "react";
import "../CompCss/MontePC.css";

export default function MontePC() {
  const [selected, setSelected] = useState(""); // Estado para armazenar o item selecionado

  const items = [
    "Processador",
    "Placa Mãe",
    "Memória",
    "Placa de vídeo",
    "SSD",
    "HD",
    "Cooler",
    "Fonte",
    "Gabinete",
    "Fans",
    "Sistema Operacional",
    "Software",
  ];

  const handleSelection = (item) => {
    setSelected(item); // Atualiza o estado com o botão selecionado
  };

  return (
    <div className="Main-MontePC">
      <aside className="sidebar">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${
                selected === item ? "selected" : "deselected"
              }`}
              onClick={() => handleSelection(item)} // Define o botão clicado como selecionado
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
