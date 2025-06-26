import React, { useState, useEffect } from 'react';
import styles from './requisitos.module.css';

export default function RequisitoModal({ onClose, onSave, categoriaId, requisito }) {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    setTexto(requisito?.requisito || '');
  }, [requisito]);

  const handleSubmit = async () => {
    if (!texto.trim()) return alert("Requisito no puede estar vacío");

    try {
      await onSave(categoriaId, { requisito: texto });
      onClose();
    } catch (error) {
      console.error("Error al guardar requisito", error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{requisito ? 'Editar Requisito' : 'Agregar Requisito'}</h2>
        <input
          type="text"
          placeholder="Escribe el requisito"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={handleSubmit} className={styles.catBtn}>Guardar</button>
        <button onClick={onClose} className={styles.deleteBtn}>Cancelar</button>
      </div>
    </div>
  );
}
