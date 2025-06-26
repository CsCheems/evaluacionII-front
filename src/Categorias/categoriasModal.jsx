import React, { useEffect, useState } from 'react';
import styles from './categoriasModal.module.css';
import CategoriasService from '../service/categoriasService';

export default function CategoriasModal({ onClose, categoria }) {
  const [form, setForm] = useState({
    categoria: '',
    categoria_fed: '',
    categoria_est: '',
    categoria_ant: '',
  });

  useEffect(() => {
    if (categoria) {
      setForm({
        categoria: categoria.categoria || '',
        categoria_fed: categoria.categoria_fed || '',
        categoria_est: categoria.categoria_est || '',
        categoria_ant: categoria.categoria_ant || '',
      });
    } else {
      setForm({
        categoria: '',
        categoria_fed: '',
        categoria_est: '',
        categoria_ant: '',
      });
    }
  }, [categoria]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (categoria && categoria.id) {
      console.log('Actualizando categoría:', categoria.id);
      await CategoriasService.actualizarCategoria(categoria.id, form);
    } else {
      await CategoriasService.crearCategoria(form);
    }
    onClose();
  };

  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>{categoria ? 'Editar Categoría' : 'Nueva Categoría'}</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="cat"><b>Categoría*</b></label>
          <input
            type="text"
            placeholder="Categoría"
            name="categoria"
            id="cat"
            required
            value={form.categoria}
            onChange={handleChange}
          />

          <label htmlFor="catFed"><b>Categoría Federal*</b></label>
          <input
            type="text"
            placeholder="Categoría Federal"
            name="categoria_fed"
            id="catFed"
            required
            value={form.categoria_fed}
            onChange={handleChange}
          />

          <label htmlFor="catEst"><b>Categoría Estatal*</b></label>
          <input
            type="text"
            placeholder="Categoría Estatal"
            name="categoria_est"
            id="catEst"
            required
            value={form.categoria_est}
            onChange={handleChange}
          />

          <label htmlFor="catPrev"><b>Categoría Anterior</b></label>
          <input
            type="text"
            placeholder="Categoría Previa"
            name="categoria_ant"
            id="catPrev"
            value={form.categoria_ant}
            onChange={handleChange}
          />

          <div className={styles.buttons}>
            <button type="submit">{categoria ? 'Actualizar' : 'Registrar'}</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
}