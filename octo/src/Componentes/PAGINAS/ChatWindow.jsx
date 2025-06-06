// src/componentes/ChatWindow.jsx
import React, { useState } from 'react';
import { FaRobot, FaArrowUp } from 'react-icons/fa';
import '../CompCss/Chat.css';

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'krakinho',
      text: 'Bem-vindo(a) ao Krakinho, seu assistente de montagem de PCs da OctoCore!'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'krakinho',
          text: 'Exemplo de resposta do Krakinho com sugestão de build.'
        }
      ]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="header-left">
          <FaRobot size={30} />
          <span>Krakinho</span>
        </div>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'user' : 'krakinho'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
