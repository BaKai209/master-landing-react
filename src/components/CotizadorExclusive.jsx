// snippet-showna-ink-express.js
// Mora Tech Suite - Alta Ingeniería Digital
// Componente de enrutamiento optimizado para ShowNa Ink (Fricción Cero)

import React, { useState } from 'react';

export default function CotizadorShowNa() {
  const [nombre, setNombre] = useState('');
  const [estilo, setEstilo] = useState('');
  const [zona, setZona] = useState('');
  const [tamano, setTamano] = useState('');

  const enviarAWhatsApp = (e) => {
    e.preventDefault();
    
    // Canal oficial verificado de ShowNa Ink
    const TELEFONO = '573027061666';
    
    // Construcción del string estructurado para el tatuador
    const textoMensaje = `🔥 ¡Nueva Solicitud de Cotización - ShowNa Ink! 🔥%0A%0A` +
      `• *Cliente:* ${encodeURIComponent(nombre)}%0A` +
      `• *Estilo Seleccionado:* [${encodeURIComponent(estilo)}]%0A` +
      `• *Zona del Cuerpo:* ${encodeURIComponent(zona)}%0A` +
      `• *Tamaño Proyectado:* ${encodeURIComponent(tamano)}%0A%0A` +
      `_El cliente se encuentra en espera de confirmación de tarifa y agenda para el abono del turno._`;

    const urlEndpoint = `https://wa.me/${TELEFONO}?text=${textoMensaje}&type=phone_number&app_absent=0`;
    
    window.open(urlEndpoint, '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#141414',
        border: '1px solid rgba(147, 51, 234, 0.4)',
        borderRadius: '16px',
        padding: '24px',
        boxSizing: 'border-box'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#c084fc', margin: '0 0 4px 0', fontSize: '22px', fontWeight: '800' }}>SHOWNA INK</h2>
          <p style={{ color: '#a3a3a3', margin: 0, fontSize: '10px', tracking: '1px' }}>COTIZADOR AUTOMÁTICO 24/7</p>
        </div>

        <form onSubmit={enviarAWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#a3a3a3', marginBottom: '6px' }}>NOMBRE COMPLETO</label>
            <input 
              type="text" 
              required 
              placeholder="Ej. Camilo Mendoza"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ width: '100%', padding: '12px', backgroundColor: '#1c1c1c', border: '1px solid #262626', borderRadius: '8px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#a3a3a3', marginBottom: '6px' }}>ESTILO PRINCIPAL</label>
            <select 
              required 
              value={estilo}
              onChange={(e) => setEstilo(e.target.value)}
              style={{ width: '100%', padding: '12px', backgroundColor: '#1c1c1c', border: '1px solid #262626', borderRadius: '8px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            >
              <option value="">Selecciona un estilo...</option>
              <option value="Realismo Sombreado / Color">Realismo Sombreado / Color</option>
              <option value="Blackwork / Coberturas">Blackwork / Coberturas</option>
              <option value="Línea Fina / Minimalista">Línea Fina / Minimalista</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#a3a3a3', marginBottom: '6px' }}>ZONA DEL CUERPO</label>
            <input 
              type="text" 
              required 
              placeholder="Ej. Antebrazo, Espalda"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              style={{ width: '100%', padding: '12px', backgroundColor: '#1c1c1c', border: '1px solid #262626', borderRadius: '8px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#a3a3a3', marginBottom: '6px' }}>TAMAÑO ESTIMADO</label>
            <select 
              required 
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
              style={{ width: '100%', padding: '12px', backgroundColor: '#1c1c1c', border: '1px solid #262626', borderRadius: '8px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            >
              <option value="">Selecciona el tamaño...</option>
              <option value="Pequeño (1-5 cm)">Pequeño (1-5 cm)</option>
              <option value="Mediano (6-15 cm)">Mediano (6-15 cm)</option>
              <option value="Grande (Más de 16 cm)">Grande (Más de 16 cm)</option>
            </select>
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '14px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', marginTop: '8px' }}
          >
            🚀 AGENDAR COTIZACIÓN EN WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
}
