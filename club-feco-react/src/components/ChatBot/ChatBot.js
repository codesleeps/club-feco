import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your Club FECO assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Welcome to Club FECO. How can I assist you with our premium CBD products today?";
    } else if (message.includes('products') || message.includes('cbd')) {
      return "We offer a wide range of premium CBD products including tinctures, edibles, topicals, vapes, and our signature FECO shots. Each product is carefully crafted with the highest quality ingredients. What specific product interests you?";
    } else if (message.includes('price') || message.includes('cost') || message.includes('buy')) {
      return "Our products are competitively priced with various strengths available. For specific pricing and to place orders, please visit our products section or contact your local supplier. Would you like more information about any particular product?";
    } else if (message.includes('quality') || message.includes('ingredients')) {
      return "At Club FECO, quality is our top priority. All our products use 100% pure and natural ingredients, sourced from premium hemp extracts. Our CBD products undergo rigorous testing to ensure they meet the highest standards.";
    } else if (message.includes('delivery') || message.includes('shipping')) {
      return "We work with local suppliers to ensure fast and reliable delivery. Please contact your local supplier for specific delivery information and options in your area.";
    } else if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with regarding our CBD products or services?";
    } else {
      return "I'd be happy to help you with information about our premium CBD products, pricing, quality standards, or anything else related to Club FECO. What would you like to know more about?";
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot toggle button */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Club FECO Assistant</h3>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;