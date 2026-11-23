import React, { useState, useEffect } from 'react';
import './DrivingSchoolModule.css';

export default function DrivingSchoolModule() {
  const [schoolName, setSchoolName] = useState('Tu Escuela de Conducción');
  const [category, setCategory] = useState('Carro Particular (B1)');
  const [payment, setPayment] = useState('Contado (Con Descuento)');
  const [schedule, setSchedule] = useState('Fines de Semana');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const escuelaParam = params.get('escuela');
    if (escuelaParam) {
      setSchoolName(escuelaParam.replace(/-/g, ' '));
    }
  }, []);

  const categories = ['Moto (A2)', 'Carro Particular (B1)', 'Servicio Público (C1)', 'Combo A2 + B1'];
  const payments = ['Contado (Con Descuento)', 'Cuotas / Financiación'];
  const schedules = ['Mañanas', 'Tardes', 'Fines de Semana'];

  const buildWhatsAppMessage = () => {
    const text = `Hola ${schoolName}, vengo de su perfil web. Quiero matricularme en Licencia: *${category}*, modalidad: *${payment}*, horario: *${schedule}*. ¿Me confirman disponibilidad?`;
    return `https://wa.me/${573026668432}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="cea-wrapper">
      <div className="cea-card">
        {/* Encabezado superior igual al módulo de arriba */}
        <div className="cea-top-bar">
          <span className="cea-brand">MORA TECH SUITE • CEA</span>
          <span className="cea-step">Cotizador Express</span>
        </div>

        <h2 className="cea-title">Matrículas: {schoolName}</h2>
        <p className="cea-subtitle">Filtra alumnos desde TikTok, Instagram y Maps en 3 clics.</p>

        {/* 1. Categoría */}
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

        {/* 2. Pago */}
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

        {/* 3. Horario */}
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

        {/* Botón principal de simulación */}
        <a
          href={buildWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="cea-btn-primary"
        >
          Simular Envío a WhatsApp →
        </a>

        {/* Separador y botón morado idéntico al de arriba */}
        <div className="cea-divider" />
        <p className="cea-owner-text">¿Eres dueño o director de esta escuela de conducción?</p>
        <a
          href={`https://wa.me/${573026668432}?text=${encodeURIComponent(
            `Hola Ing. Johan, quiero activar el Piloto Gratis de 7 Días para ${schoolName}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cea-btn-purple"
        >
          ⚡ Activa este módulo en {schoolName}
        </a>
      </div>
    </section>
  );
}
