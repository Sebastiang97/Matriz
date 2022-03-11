import getData from "./fetch.js";
import tabla from './tabla.js'

const query = async  () => {
        
    //const formQuery = document.querySelector('.root');
    const resHtml = document.querySelector('.root');
    
    const alert = document.querySelector('.invalid-feedback');
    let tipo = document.querySelector('#tipoCliente').value;
    let estado = document.querySelector('#estado').value;
    let opcion = document.querySelector('#opcion').value;
    
    tipo   = ( tipo   == 'vacio') ? false : tipo;
    estado = ( estado == 'vacio') ? false : estado;   
    opcion = ( opcion == 'vacio') ? false : opcion;
    
    if(tipo != false && estado != false && opcion != false){
        alert.classList.remove("d-block");
        let data = await getData();
        let res = tabla(data,tipo,estado,opcion);
        resHtml.innerHTML = "";
        resHtml.innerHTML = res;
        
    }else{
        alert.classList.add("d-block");
    }
}

document.querySelector('#consulta').addEventListener('click', query);
