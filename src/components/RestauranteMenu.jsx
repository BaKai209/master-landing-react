import React, { useState } from 'react';
import './RestauranteMenu.css'

const MENU_DATA = [
  { id: 1, name: "Hamburguesa Premium Mora", price: 28000, desc: "Carne angus 200g, queso cheddar fundido y salsa de la casa." },
  { id: 2, name: "Papas Rústicas Especiales", price: 12000, desc: "Papas nativas con especias de la casa y alioli de ajo." },
  { id: 3, name: "Malteada de Caramelo Salado", price: 14000, desc: "Helado artesanal, crema batida y salsa de caramelo neón." }
];

export default function RestaurantMenu() {
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
    let message = "¡Hola! Me gustaría realizar el siguiente pedido directo (Sin Comisiones):\n\n";
    
    Object.keys(cart).forEach(id => {
      const item = MENU_DATA.find(p => p.id === parseInt(id));
      if (item) {
        message += `▪️ ${cart[id]}x ${item.name} ($${(item.price * cart[id]).toLocaleString('es-CO')})\n`;
      }
    });

    message += `\n💰 *Total a Pagar: $${calculateTotal().toLocaleString('es-CO')}*`;
    
    // Codifica el mensaje de texto para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Cambia el número por tu WhatsApp o uno de prueba
    window.open(`https://wa.me/573026668432`, '_blank');
  };

  return (
    <div className='styles-container'>
      <h2 className='title ' >Simulador de Menú Inteligente</h2>
      <p className='subtitle ' >Prueba cómo tus clientes ordenan directo a tu WhatsApp y ahorras el 30% de comisiones.</p>

      <div className='menu-list'>
        {MENU_DATA.map(item => (
          <div key={item.id} className='card'>
            <div className='card-info'>
              <h3 className='item-name'>{item.name}</h3>
              <p className='item-desc'>{item.desc}</p>
              <span className='item-price'>\${item.price.toLocaleString('es-CO')} COP</span>
            </div>
            <div className='styles-container'>
              {cart[item.id] > 0 && (
                <>
                  <button onClick={() => removeFromCart(item.id)} className='btn-minus'>-</button>
                  <span className='quantity'>{cart[item.id]}</span>
                </>
              )}
              <button onClick={() => addToCart(item.id)} className='btn-plus'>+</button>
            </div>
          </div>
        ))}
      </div>

      {calculateTotal() > 0 && (
        <div className='footer-cart'>
          <div className='total-container'>
            <span className='totalText'>Total Seleccionado:</span>
            <span className='totalAmount'>\${calculateTotal().toLocaleString('es-CO')} COP</span>
          </div>
          <button onClick={sendToWhatsApp} className='btn-submit'>
            Enviar Pedido a WhatsApp ➔
          </button>
        </div>
      )}
    </div>
  );
}