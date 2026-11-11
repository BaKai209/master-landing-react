import React, { useState, useEffect } from 'react';

export default function PreCalificadorEstetico() {
  const [nombreClinica, SetNombreClinica] = useState('Mora Tech Suite');
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    nombre: '',
    zona: '',
    tratamiento: '',
    prioridad: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clinicaParam = params.get('clinica');
    if (clinicaParam) {
      SetNombreClinica(clinicaParam.toUpperCase());
    }
  }, []);

  // 🎯 Variables Clínicas Optimizadas: Medicina Estética + Control de Peso Avanzado
  const tratamientos_por_zona = {
    facial: [
      { id: 'acne', nombre: 'Tratamiento Avanzado de Acné y Cicatrices' },
      { id: 'botox', nombre: 'Toxina Botulínica (Líneas de expresión)' },
      { id: 'armonizacion', nombre: 'Armonización Facial (Ácido Hialurónico)' }
    ],
    corporal: [
      { id: 'moldeamiento', nombre: 'Moldeamiento Láser Avanzado' },
      { id: 'celulitis', nombre: 'Tratamiento de Celulitis (Enzimas)' },
      { id: 'tensado', nombre: 'Tensado Cutáneo (Radiofrecuencia)' }
    ],
    peso: [
      { id: 'adelgazamiento', nombre: 'Programa Médico de Adelgazamiento (Metco)' },
      { id: 'metabolico', nombre: 'Optimización Metabólica y Nutrición' },
      { id: 'sueroterapia', nombre: 'Sueroterapia de Desintoxicación y Control de Peso' }
    ]
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

   const enviarAWhatsApp = () => {
    // Número simulado de la administración de la clínica
    const telefonoClinica = '573026668432';
    
    const mensaje = `Hola, quiero confirmar mi prioridad de agenda.\n\n` +
      `*Paciente:* ${userData.nombre}\n` +
      `*Enfoque Clínico:* ${userData.zona.toUpperCase()}\n` +
      `*Tratamiento de Interés:* ${userData.tratamiento}\n` +
      `*Urgencia:* ${userData.prioridad}\n\n` +
      `_Enviado desde el Módulo de Pre-calificación Express de Mora Tech Suite_`;

    const url = `https://wa.me/${telefonoClinica}?text=${encodeURIComponent(mensaje)}`;
    
    // 🔥 OPTIMIZACIÓN 0.1%: Redirección en la misma pestaña para evadir bloqueadores de pop-ups en móvil
    window.location.href = url;
  };


  
  const styles = {
    container: {
      maxWidth: '440px',
      margin: '32px auto',
      backgroundColor: '#09090b',
      color: '#f4f4f5',
      border: '1px solid #27272a',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(6, 182, 212, 0.15)',
      fontFamily: 'sans-serif'
    },
    header: {
      marginBottom: '24px',
      borderBottom: '1px solid #27272a',
      paddingBottom: '16px'
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    brand: {
      fontSize: '12px',
      fontFamily: 'monospace',
      color: '#22d3ee',
      textTransform: 'uppercase',
      letterSpacing: '1.5px'
    },
    stepText: {
      fontSize: '12px',
      fontFamily: 'monospace',
      color: '#71717a'
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginTop: '8px',
      letterSpacing: '-0.5px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#d4d4d8',
      marginBottom: '12px'
    },
    input: {
      width: '100%',
      backgroundColor: '#18181b',
      border: '1px solid #27272a',
      borderRadius: '12px',
      padding: '12px 16px',
      color: '#ffffff',
      fontSize: '15px',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s'
    },
    btnCyan: {
      width: '100%',
      backgroundColor: userData.nombre ? '#06b6d4' : '#27272a',
      color: userData.nombre ? '#000000' : '#71717a',
      fontWeight: '600',
      padding: '14px',
      borderRadius: '12px',
      border: 'none',
      cursor: userData.nombre ? 'pointer' : 'not-allowed',
      fontSize: '15px',
      marginTop: '16px',
      transition: 'all 0.2s'
    },
    btnOption: (active) => ({
      width: '100%',
      textAlign: 'left',
      padding: '16px',
      borderRadius: '12px',
      border: active ? '1px solid #22d3ee' : '1px solid #27272a',
      backgroundColor: active ? 'rgba(6, 182, 212, 0.05)' : '#18181b',
      cursor: 'pointer',
      marginBottom: '12px',
      transition: 'all 0.2s',
      display: 'block'
    }),
    btnGrid: (active) => ({
      padding: '12px',
      borderRadius: '12px',
      border: active ? '1px solid #22d3ee' : '1px solid #27272a',
      backgroundColor: active ? 'rgba(6, 182, 212, 0.05)' : 'transparent',
      color: active ? '#ffffff' : '#a1a1aa',
      cursor: 'pointer',
      fontSize: '13px',
      textAlign: 'center',
      transition: 'all 0.2s'
    }),
    btnBack: {
      background: 'none',
      border: 'none',
      color: '#71717a',
      fontSize: '12px',
      fontFamily: 'monospace',
      cursor: 'pointer',
      marginTop: '12px',
      padding: '0'
    },
    btnEmerald: {
      width: '100%',
      backgroundColor: userData.prioridad ? '#10b981' : '#27272a',
      color: userData.prioridad ? '#000000' : '#71717a',
      fontWeight: '700',
      padding: '14px',
      borderRadius: '12px',
      border: 'none',
      cursor: userData.prioridad ? 'pointer' : 'not-allowed',
      fontSize: '15px',
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px'
    }
  };

  return (

    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.topRow}>
          <span style={styles.brand}>{nombreClinica}</span>
          <span style={styles.stepText}>Paso {step} de 4</span>
        </div>
      </div>

      {/* Paso 1: Nombre */}
      {step === 1 && (
        <div>
          <label style={styles.label}>¿Con quién tenemos el gusto de hablar?</label>
          <input
            type="text"
            placeholder="Escribe tu nombre completo"
            value={userData.nombre}
            onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
            style={styles.input}
          />
          <button disabled={!userData.nombre} onClick={handleNext} style={styles.btnCyan}>
            Siguiente paso
          </button>
        </div>
      )}

      {/* Paso 2: Enfoque Clínico */}
      {step === 2 && (
        <div>
          <p style={styles.label}>¿Cuál es tu principal objetivo clínico?</p>
          <button onClick={() => { setUserData({ ...userData, zona: 'peso', tratamiento: '' }); handleNext(); }} style={styles.btnOption(userData.zona === 'peso')}>
            <strong style={{ display: 'block', color: '#ffffff', fontSize: '15px' }}>⚖️ Control de Peso y Nutrición</strong>
            <span style={{ fontSize: '13px', color: '#a1a1aa' }}>Adelgazamiento médico, sueroterapia metabólica.</span>
          </button>
          <button onClick={() => { setUserData({ ...userData, zona: 'facial', tratamiento: '' }); handleNext(); }} style={styles.btnOption(userData.zona === 'facial')}>
            <strong style={{ display: 'block', color: '#ffffff', fontSize: '15px' }}>✨ Estética Facial</strong>
            <span style={{ fontSize: '13px', color: '#a1a1aa' }}>Botox, cicatrices de acné, armonización facial.</span>
          </button>
          <button onClick={() => { setUserData({ ...userData, zona: 'corporal', tratamiento: '' }); handleNext(); }} style={styles.btnOption(userData.zona === 'corporal')}>
            <strong style={{ display: 'block', color: '#ffffff', fontSize: '15px' }}>🧍 Contorno Corporal</strong>
            <span style={{ fontSize: '13px', color: '#a1a1aa' }}>Moldeamiento láser, flacidez avanzada.</span>
          </button>
          <button onClick={handleBack} style={styles.btnBack}>← Volver</button>
        </div>
      )}

      {/* Paso 3: Tratamiento */}
      {step === 3 && (
        <div>
          <p style={styles.label}>Selecciona el tratamiento deseado:</p>
          {tratamientos_por_zona[userData.zona]?.map((t) => (
            <button key={t.id} onClick={() => { setUserData({ ...userData, tratamiento: t.nombre }); handleNext(); }} style={styles.btnOption(userData.tratamiento === t.nombre)}>
              <span style={{ color: '#ffffff', fontSize: '14px' }}>{t.nombre}</span>
            </button>
          ))}
          <button onClick={handleBack} style={styles.btnBack}>← Volver</button>
        </div>
      )}

      {/* Paso 4: Prioridad y Envío */}
      {step === 4 && (
        <div>
          <p style={styles.label}>¿Para cuándo tienes planeado tu procedimiento?</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            {['Esta semana', 'Este mes', 'Cotizar'].map((p) => (
              <button key={p} onClick={() => setUserData({ ...userData, prioridad: p })} style={styles.btnGrid(userData.prioridad === p)}>
                {p}
              </button>
            ))}
          </div>
          <button disabled={!userData.prioridad} onClick={enviarAWhatsApp} style={styles.btnEmerald}>
            💬 Confirmar por WhatsApp
          </button>
          <button onClick={handleBack} style={styles.btnBack}>← Volver</button>
        </div>
      )}
    </div>
  );
}
