import { useState } from 'react'
import React from 'react'

import styles from './categoriasModal.module.css'

export default function CategoriasModal() {

 

  return (
    <section className={styles.modal}>
            <div className={styles.moddalContent}>
                <h1>Categoria</h1>
                <hr>

                <label for="Categoria"><b>Categoria*</b></label>
                <input type="text" placeholder="Categoria" name="categoria" id="cat" required/>

                <label for="categoriaFed"><b>Categoria Federal*</b></label>
                <input type="text" placeholder="Categoria Federal" name="categoriaFed" id="catFed" required/>

                <label for="categoriaEst"><b>Categoria Estatal*</b></label>
                <input type="text" placeholder="Categoria Estatal" name="categoriaEst" id="catEst" required/>

                <label for="categoriaPrev"><b>Categoria Anterior</b></label>
                <input type="text" placeholder="Categoria Precia" name="categoriaPrev" id="catPrev"/>
                </hr>

                <button >Register</button>
                <button >Cancelar</button>
            </div>         
    </section>
  )
}
