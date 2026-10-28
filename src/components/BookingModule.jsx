import React, { useState } from 'react';

export  function BookingModule() {
  const [formData, setFormData] = useState({
    leadName: '',
    companyName: '',
    resDate: '',
    resTime: '',
    paxCount: '',
    dietaryNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ingeniería del enlace de WhatsApp: Formatea los datos con asteriscos para que lleguen en negrita
    const message = `*NUEVA RESERVA CORPORATIVA*%0A%0A` +
      ` *Nombre:* ${formData.leadName}%0A` +
      ` *Empresa:* ${formData.companyName}%0A` +
      ` *Fecha:* ${formData.resDate}%0A` +
      ` *Hora:* ${formData.resTime}%0A` +
      ` *Asistentes:* ${formData.paxCount} personas%0A` +
      ` *Menú/Notas:* ${formData.dietaryNotes}`;

    // Línea de atención de Mora Tech Suite o la caja del restaurante
    const phoneNumber = "573026668432"; 
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Ecosistema de Estilos del Componente
  const styles = {
    container: {
      width: '100%',
      maxWidth: '440px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 8px 24px #00f0ff',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: '100px 33rem',
      borderTop: '1px solid #00f0ff',
    },
    header: {
      background: '#0a0a0a',
      color: '#ffffff',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    avatar: {
      width: '42px',
      height: '42px',
      background: '#00f0ff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px'
    },
    headerText: {
      margin: 0,
      fontSize: '16px',
      fontWeight: '600'
    },
    headerSub: {
      fontSize: '12px',
      opacity: 0.85,
      display: 'block',
    },
    chatBody: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    bubbleIn: {
      backgroundColor: '#0a0a0a',
      alignSelf: 'flex-start',
      maxWidth: '85%',
      padding: '12px 16px',
      borderRadius: '12px 0 12px 12px',
      fontSize: '14px',
      lineHeight: '1.4',
      boxShadow: '0 1px 2px #00f0ff',
      color: ' #ffffff'
    },
    bubbleForm: {
      backgroundColor: '#0a0a0a',
      alignSelf: 'flex-start',
      width: '92%',
      padding: '16px',
      borderRadius: '0 12px 12px 12px',
      boxShadow: '0 1px 2px #00f0ff'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    label: {
        fontSize: '11px',
        fontWeight: '700',
        color: '#b3b3b3', 
        textTransform: 'uppercase',
        letterSpacing: '0.7px' 
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #e1e1e1',
      borderRadius: '8px',
      boxSizing: 'border-box',
      fontSize: '14px',
      backgroundColor: '#fafafa',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    btnSubmit: {
      backgroundColor: '#00f0ff',
      color: '#0a0a0a',
      border: 'none',
      padding: '12px',
      borderRadius: '8px',
      fontWeight: '700',
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'center',
      marginTop: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    footer: {
      background: '#0a0a0a',
      padding: '12px',
      textAlign: 'center',
      fontSize: '11px',
      color: '#ffffff',
      borderTop: '1px solid #00f0ff'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.avatar}>💼</div>
        <div>
          <h3 style={styles.headerText}>Asistente Corporativo</h3>
          <span style={styles.headerSub}>En línea - Suite Gastronómica</span>
        </div>
      </div>

      <div style={styles.chatBody}>
        <div style={styles.bubbleIn}>
          ¡Hola! Gracias por elegirnos. Para gestionar tu reserva corporativa de inmediato, completa los siguientes campos.
        </div>

        <div style={styles.bubbleForm}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre del Coordinador</label>
              <input 
                type="text" 
                name="leadName" 
                placeholder="Ej. Carlos Mendoza" 
                value={formData.leadName} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre de la Empresa</label>
              <input 
                type="text" 
                name="companyName" 
                placeholder="Ej. Mora Tech Suite" 
                value={formData.companyName} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Fecha del Evento</label>
              <input 
                type="date" 
                name="resDate" 
                value={formData.resDate} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Hora de Llegada</label>
              <input 
                type="time" 
                name="resTime" 
                value={formData.resTime} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Número de Invitados</label>
              <input 
                type="number" 
                name="paxCount" 
                min="1" 
                placeholder="Cantidad de personas" 
                value={formData.paxCount} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Preferencia de Menú</label>
              <select 
                name="dietaryNotes" 
                value={formData.dietaryNotes} 
                onChange={handleChange} 
                style={styles.input} 
                required
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Menú Estándar de la Casa">Menú Tradicional de la Casa</option>
                <option value="Opción Vegetariana Habilitada">Opción Vegetariana (Burritos/Bowls)</option>
                <option value="Restricciones bajo consulta">Múltiples restricciones / Alergias</option>
              </select>
            </div>

            <button type="submit" style={styles.btnSubmit}>
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>

      <div style={styles.footer}>
        🔒 Infraestructura unificada - Mora Tech Suite
      </div>
    </div>
  );
}

export default BookingModule;