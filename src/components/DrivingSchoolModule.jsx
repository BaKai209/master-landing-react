import React, { useState, useEffect } from 'react';
import './DrivingSchoolModule.css';

export default function DrivingSchoolModule() {
  const [schoolName, setSchoolName] = useState('Tu Escuela de Conducción');
  const [targetWa, setTargetWa] = useState('573026668432');
  const [category, setCategory] = useState('Carro Particular (B1)');
  const [payment, setPayment] = useState('Contado (Con Descuento)');
  const [schedule, setSchedule] = useState('Fines de Semana');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const escuelaParam = params.get('escuela');
    const waParam = params.get('wa');

    if (escuelaParam) {
      setSchoolName(escuelaParam.replace(/-/g, ' '));
    }
    if (waParam) {
      setTargetWa(waParam);
    }
  }, []);

  const categories = ['Moto (A2)', 'Carro Particular (B1)', 'Servicio Público (C1)', 'Combo A2 + B1'];
  const payments = ['Contado (Con Descuento)', 'Cuotas / Financiación'];
  const schedules = ['Mañanas', 'Tardes', 'Fines de Semana'];

  const buildWhatsAppMessage = () => {
    const text = `Hola ${schoolName}, vengo de su perfil web. Quiero matricularme en Licencia: *${category}*, modalidad: *${payment}*, horario: *${schedule}*. ¿Me confirman disponibilidad?`;
    return `https://wa.me/${targetWa}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador-escuelas" className="cea-wrapper">
      <div className="cea-card">
        <div className="cea-top-bar">
          <span className="cea-brand">MORA TECH SUITE • CEA</span>
          <span className="cea-step">Cotizador Express</span>
        </div>

        <h2 className="cea-title">Matrículas: {schoolName}</h2>
        <p className="cea-subtitle">Filtra alumnos desde TikTok, Instagram y Maps en 3 clics.</p>

        <div className="cea-group">
          <label className="cea-label">1. Categoría de Licencia</label>
          <div className="cea-grid">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={category === item ? 'cea-option active' : 'cea-option'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="cea-group">
          <label className="cea-label">2. Modalidad de Pago</label>
          <div className="cea-grid">
            {payments.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPayment(item)}
                className={payment === item ? 'cea-option active' : 'cea-option'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="cea-group">
          <label className="cea-label">3. Horario Preferido</label>
          <div className="cea-grid">
            {schedules.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSchedule(item)}
                className={schedule === item ? 'cea-option active' : 'cea-option'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <a
          href={buildWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="cea-btn-primary"
        >
          {targetWa === '573026668432' ? 'Simular Envío a WhatsApp →' : 'Cotizar y Enviar a WhatsApp →'}
        </a>

               {/* Muestra el botón morado SOLO en modo demo (cuando targetWa es tu número) */}
               {targetWa === '573026668432' && (
          <>
            <div className="cea-divider" />
            <p className="cea-owner-text">¿Eres dueño o director de esta escuela de conducción?</p>
            <a
              href={`https://wa.me/573026668432?text=${encodeURIComponent(
                `Hola Ing. Johan, quiero activar el Piloto Gratis de 7 Días para ${schoolName}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cea-btn-purple"
            >
              ⚡ Activa este módulo en {schoolName}
            </a>
          </>
        )}
        </div>  

    </section>
  );
}
