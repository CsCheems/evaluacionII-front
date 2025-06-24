import React from 'react'
import styles from './categorias.module.css'

export default function Categorias() {

  const abrirModal = () => {

  } 
  
  return (
    <div>
      <section className={styles.main_container}>
        <div className={styles.content}>
          <h1>Categorias</h1>
          <a className={styles.catBtn} onClick={() => abrirModal}>Crear Categoria</a>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
