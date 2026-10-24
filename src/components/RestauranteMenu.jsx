import React, { useState } from 'react';
import './RestauranteMenu.css';

const MENU_DATA = [
  { 
    id: 1, 
    name: "Pizza Prototipo", 
    price: 48000, 
    desc: "Masa madurada por 48 horas, pomodoro artesanal, mozzarella, jamón serrano premium y albahaca fresca.",
    image: "images/pizza.png" 
  },
  { 
    id: 2, 
    name: "Lasagna Prototipo", 
    price: 42000, 
    desc: "Capas de pasta artesanal con ragú de carne premium, salsa bechamel de la casa y queso gratinado al horno.",
    image: "images/lasagna.png" 
  },
  { 
    id: 3, 
    name: "Focaccia Prototipo", 
    price: 18000, 
    desc: "Pan italiano plano horneado con aceite de oliva virgen extra, romero fresco y escamas de sal marina.",
    image: "images/focaccia.png" 
  }
];

export default function RestaurantMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    if (!cart[id]) return;
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] === 1) delete updated[id];
      else updated[id]--;
      return updated;
    });
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, id) => {
      const item = MENU_DATA.find(p => p.id === parseInt(id));
      return total + (item ? item.price * cart[id] : 0);
    }, 0);
  };

  const sendToWhatsApp = () => {
    let message = "¡Hola! Me gustaría realizar el siguiente pedido directo a la mesa / domicilio:\n\n";
    
    Object.keys(cart).forEach(id => {
      const item = MENU_DATA.find(p => p.id === parseInt(id));
      if (item) {
        message += `▪️ ${cart[id]}x ${item.name} ($${(item.price * cart[id]).toLocaleString('es-CO')})\n`;
      }
    });

    message += `\n💰 *Total a Pagar: $${calculateTotal().toLocaleString('es-CO')}*`;
    message += `\n\n_Pedido demo generado por infraestructura Mora Tech Suite_`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573026668432`, '_blank');
  };

  // tarjeta de acceso dentro del Portafolio Principal
  if (!showMenu) {
    return (
      <div className="portfolio-showcase-card">
        <div className="showcase-badge">PROTOCASE</div>
        <h3 className="showcase-title">Simulador de Pedidos Online</h3>
        <p className="showcase-client">Proyecto Piloto: <span className="highlight-text">
          Restaurantes/comidas rapidas//cafeterias</span></p>
        <p className="showcase-desc">
          Módulo de menú inteligente de carga ultra rápida diseñado 
          para eliminar el 30% de comisiones por intermediarios 
          y automatizar pedidos directos a WhatsApp.
        </p>
        <button className="showcase-btn" onClick={() => setShowMenu(true)}>
          Empezar Simulacion ➔
        </button>
      </div>
    );
  }

  //vista android/IOS
  return (
    <div className="menu-app-container">
      <div className="menu-header">
        <button className="menu-back-btn" onClick={() => setShowMenu(false)}>✕ Finalizar Simulación</button>
        <h2 className="menu-main-title">Menú Inteligente Digital</h2>
        <p className="menu-client-tag">Exclusivo para: Comensales - Visitantes Digitales</p>
        <p className="menu-instruction">Selecciona los platos para simular la comanda en tiempo real.</p>
      </div>

      <div className="menu-items-list">
        {MENU_DATA.map(item => (
          <div key={item.id} className="menu-item-card">
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <div className="menu-item-info">
              <h4 className="menu-item-name">{item.name}</h4>
              <p className="menu-item-desc">{item.desc}</p>
              <span className="menu-item-price">\${item.price.toLocaleString('es-CO')} COP</span>
            </div>
            
            <div className="menu-counter-wrapper">
              {cart[item.id] > 0 && (
                <>
                  <button onClick={() => removeFromCart(item.id)} className="counter-btn minus">-</button>
                  <span className="counter-qty">{cart[item.id]}</span>
                </>
              )}
              <button onClick={() => addToCart(item.id)} className="counter-btn plus">+</button>
            </div>
          </div>
        ))}
      </div>

      {calculateTotal() > 0 && (
        <div className="menu-footer-cart">
          <div className="footer-total-row">
            <span className="total-label">Total de la Orden:</span>
            <span className="total-value">\${calculateTotal().toLocaleString('es-CO')} COP</span>
          </div>
          <button onClick={sendToWhatsApp} className="footer-submit-btn">
            Enviar Pedido por WhatsApp ➔
          </button>
        </div>
      )}
    </div>
  );
}
