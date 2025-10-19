import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cssVariables } from './constants/colors';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NewsSection from './components/NewsSection/NewsSection';
import About from './components/About/About';
import Products from './components/Products/Products';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Inject CSS variables */}
        <style>{cssVariables}</style>

        <Header />
        <main>
          <Hero />
          <NewsSection />
          <About />
          <Products />
          <Carousel />
        </main>
        <Footer />

        {/* AI Chat Bot */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;