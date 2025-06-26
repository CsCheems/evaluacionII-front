import axios from 'axios';

const ms_catalogo_categorias = "http://localhost:8001";

class CategoriasService{

    obtenerCategorias(){
        return axios.get(`${ms_catalogo_categorias}/api/categorias?soloActivo=false`);
    }

    obtenerCategoriaId(id){
        return axios.get(`${ms_catalogo_categorias}/api/categorias/${id}`)
    }

    crearCategoria(categoria){
        return axios.post(`${ms_catalogo_categorias}/api/categorias`, categoria,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    actualizarCategoria(id, categoria){
        return axios.put(`${ms_catalogo_categorias}/api/categorias/${id}`, categoria,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    eliminarCategoria(id){
        return axios.delete(`${ms_catalogo_categorias}/api/categorias/${id}`);
    }

    obtenerRequisitos(){
        return axios.get(`${ms_catalogo_categorias}/api/trequisito?soloActivos=true`);
    }

    obtenerRequisitosPorId(id){
        return axios.get(`${ms_catalogo_categorias}/api/trequisitos/${id}`);
    }

    actualizarRequisitos(requisito){
        return axios.put(`${ms_catalogo_categorias}/api/trequisitos`, requisito,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    eliminarRequisito(id){
        return axios.delete(`${ms_catalogo_categorias}/api/trequisitos/${id}`);
    }

}

export default new CategoriasService();