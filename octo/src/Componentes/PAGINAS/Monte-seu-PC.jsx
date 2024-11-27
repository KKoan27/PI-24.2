import React, { useState } from "react";
import "../CompCss/MontePC.css";
// Exemplo de importação de ícones do Material-UI
import MemoryIcon from "@mui/icons-material/Memory";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import StorageIcon from "@mui/icons-material/Storage";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

export default function MontePC() {
  const [selected, setSelected] = useState(""); // Estado para armazenar o item selecionado

  // Lista de itens da sidebar com texto e ícones
  const items = [
    { name: "Processador", icon: <MemoryIcon /> },
    { name: "Placa Mãe", icon: <SettingsApplicationsIcon /> },
    { name: "Memória", icon: <MemoryIcon /> },
    { name: "Placa de vídeo", icon: <VideogameAssetIcon /> },
    { name: "SSD", icon: <StorageIcon /> },
    { name: "HD", icon: <StorageIcon /> },
    { name: "Cooler", icon: <SettingsApplicationsIcon /> },
    { name: "Fonte", icon: <SettingsApplicationsIcon /> },
    { name: "Gabinete", icon: <SettingsApplicationsIcon /> },
    { name: "Fans", icon: <SettingsApplicationsIcon /> },
    { name: "Sistema Operacional", icon: <SettingsApplicationsIcon /> },
    { name: "Software", icon: <SettingsApplicationsIcon /> },
  ];

  const handleSelection = (item) => {
    setSelected(item); // Define o botão clicado como selecionado
  };

  return (
    <div className="Main-MontePC">
      <aside className="sidebar">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${
                selected === item.name ? "selected" : "deselected"
              }`}
              onClick={() => handleSelection(item.name)} 
            >
              <span className="icon">{item.icon}</span> {/* Ícone */}
              <span className="text">{item.name}</span> {/* Texto */}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
