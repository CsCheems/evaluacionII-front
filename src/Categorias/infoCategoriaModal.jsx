import React from 'react';
import styles from './categorias.module.css';

export default function InfoCategoriaModal({categoria, onClose, onAgregarRequisito, onEditarRequisito, onEliminarRequisito}) {
  if (!categoria) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Requisitos de la Categoría</h2>

        {categoria.tipoRequisitos && categoria.tipoRequisitos.length > 0 ? (
          <ul className={styles.requisitosList}>
            {categoria.tipoRequisitos.map((req) => (
              <li key={req.id} className={styles.requisitoItem}>
              <span>{req.requisito}</span>
              <div className={styles.requisitoActions}>
                <button onClick={() => onEditarRequisito(req)} className={styles.editBtn}>Editar</button>
                <button onClick={() => onEliminarRequisito(req.id)} className={styles.deleteBtn}>Eliminar</button>
              </div>
            </li>
            ))}
          </ul>
        ) : (
          <p>No hay requisitos</p>
        )}

        <div className={styles.modalFooter}>
          <button onClick={onAgregarRequisito} className={styles.editBtn}>
            Agregar
          </button>
          <button onClick={onClose} className={styles.deleteBtn}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
