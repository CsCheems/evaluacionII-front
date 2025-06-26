import React from 'react';
import { useState, useEffect } from 'react';
import styles from './categorias.module.css'
import CategoriasModal from './categoriasModal'
import CategoriasService from '../service/categoriasService';

export default function Categorias() {

  const [visible, setVisible] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const abrirModal = () => {
    setSelectedCategoria(null); // Para crear, no hay categoría seleccionada
    setVisible(true);
  } 

  const cerrarModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    getCategorias();
  }, []);
  
  const getCategorias = async () => {
     const response = await CategoriasService.obtenerCategorias();
     console.log(response);
     setResponse(response);
  }

  const editatCategoria = async (id) => {
    const response = await CategoriasService.obtenerCategoriaId(id);
    setSelectedCategoria(response.data);
    setVisible(true);
  }

  const eliminarCategoria = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta categoría?");
    if(!confirmacion) return;
    try{
      await CategoriasService.eliminarCategoria(id);
      await getCategorias();
    }catch(error){
      console.error("Error al eliminar categoria", error);
      alert("Error al tratar de eliminar categoria");
    }
    
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
                {response.data.map(categoria => (
                  <tr key={categoria.id}>
                    <td>{categoria.categoria}</td>
                    <td>{categoria.categoria_fed}</td>
                    <td>{categoria.categoria_est}</td>
                    <td>{categoria.categoria_ant}</td>
                    <td>
                      <button onClick={() => editatCategoria(categoria.id)} className={styles.editBtn}>Editar</button>
                      <button onClick={() => eliminarCategoria(categoria.id)} className={styles.deleteBtn}>Eliminar</button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {visible && (
        <CategoriasModal
          onClose={cerrarModal}
          onSave={getCategorias}
          categoria={selectedCategoria}
        />
      )}
    </div>
  )
}
