import React, { useState, useRef, useEffect } from 'react';
import '../CompCss/Chat.css';

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'krakinho', text: 'Olá! Sou o Krakinho. Como posso te ajudar?' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  // Scroll automático para a última mensagem
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    // Simula resposta do Krakinho após 1s
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'krakinho', text: 'Obrigado pela sua mensagem!' }]);
    }, 1000);
  };

  return (
    <>
      <button className="krakinho-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="krakinho-chat-window">
          <div className="krakinho-header">
            <div className="krakinho-title">🐙 Krakinho</div>
            <button className="krakinho-close" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="krakinho-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`krakinho-msg ${msg.sender === 'user' ? 'user' : 'krakinho'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          <div className="krakinho-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatButton;
