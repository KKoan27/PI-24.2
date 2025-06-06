import React, { useState, useRef, useEffect } from 'react';
import '../CompCss/Chat.css';

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'krakinho', text: 'Olá! Sou o Krakinho. Como posso te ajudar?' }
  ]);
  const [input, setInput] = useState('');
  const [waiting, setWaiting] = useState(false);
  const bottomRef = useRef(null);
  const ws = useRef(null);

  // Scroll automático para a última mensagem
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Conecta ao WebSocket ao montar o componente
  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/chat');
    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, { sender: 'krakinho', text: event.data }]);
      setWaiting(false);
    };


    return () => {
      ws.current && ws.current.close();
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;

    setWaiting(true);

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
    }
    setInput('');
    // Simula resposta do Krakinho após 1s
    // setTimeout(() => {
    //   setMessages(prev => [...prev, { sender: 'krakinho', text: 'Obrigado pela sua mensagem!' }]);
    // }, 1000);
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
            <button onClick={handleSend} disabled={waiting}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatButton;
