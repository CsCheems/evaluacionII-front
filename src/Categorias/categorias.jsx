import React from 'react';
import { useState } from 'react';
import styles from './categorias.module.css'
import CategoriasModal from './categoriasModal'

export default function Categorias() {

  const [visible, setVisible] = useState(false);
  
  const abrirModal = () => {
    setVisible(true);
  } 

  const cerrarModal = () => {
    setVisible(false);
  };

  const obtenerCategorias = () => {
    
  }
  
  return (
    <div>
      <section className={styles.main_container}>
        <div className={styles.content}>
          <h1>Categorias</h1>
          <button className={styles.catBtn} onClick={abrirModal}>Crear</button>
          <div className={styles.tableBody}>
            <table>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Categoria Federal</th>
                  <th>Categoria Estatal</th>
                  <th>Categoria Previa</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>
                    <button className={styles.editBtn}>Editar</button>
                    <button className={styles.deleteBtn}>Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {visible && <CategoriasModal onClose={cerrarModal}/>}
    </div>
  )
}
