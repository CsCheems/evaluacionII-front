import axios from 'axios';

const ms_catalogo_categorias = "http://localhost:8001";

class CategoriasService{

    obtenerCategirias(){
        return axios.get(`${ms_catalogo_categorias}/categorias`);
    }

}

export default new CategoriasService();