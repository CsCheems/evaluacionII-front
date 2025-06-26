import React from 'react';
import styles from './categorias.module.css';

export default function InfoCategoriaModal({ categoria, onClose }) {
  if (!categoria) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Requisitos de la Categoría</h2>
        <ul>
          {categoria.tipoRequisitos && categoria.tipoRequisitos.length > 0 ? (
            categoria.tipoRequisitos.map(req => (
              <li key={req.id}>{req.requisito}</li>
            ))
          ) : (
            <li>No hay requisitos</li>
          )}
        </ul>
        <button onClick={onClose} className={styles.closeBtn}>Cerrar</button>
      </div>
    </div>
  );
}