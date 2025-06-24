import React from 'react';
import styles from './categoriasModal.module.css';

export default function CategoriasModal({ onClose }) {



  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>Categoría</h1>
        <hr />
        <label htmlFor="cat"><b>Categoría*</b></label>
        <input type="text" placeholder="Categoría" name="categoria" id="cat" required />

        <label htmlFor="catFed"><b>Categoría Federal*</b></label>
        <input type="text" placeholder="Categoría Federal" name="categoriaFed" id="catFed" required />

        <label htmlFor="catEst"><b>Categoría Estatal*</b></label>
        <input type="text" placeholder="Categoría Estatal" name="categoriaEst" id="catEst" required />

        <label htmlFor="catPrev"><b>Categoría Anterior</b></label>
        <input type="text" placeholder="Categoría Previa" name="categoriaPrev" id="catPrev" />

        <div className={styles.buttons}>
          <button >Registrar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </section>
  );
}