import React from 'react';
import styles from './categoriasModal.module.css'; 

export default function CategoriasModal({ onClose }) {



  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>Requisito</h1>
        <hr />
        <label htmlFor="req"><b>Requisito 1</b></label>
        <input type="text" placeholder="Requisito" name="requisito" id="req" required />

        <div className={styles.buttons}>
          <button >Registrar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </section>
  );
}