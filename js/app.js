const query = ()=>{
        
    const formQuery = document.querySelector('.root');
    const alert = document.querySelector('.invalid-feedback');
    let tipo = document.querySelector('#tipoCliente').value;
    let estado = document.querySelector('#estado').value;
    let opcion = document.querySelector('#opcion').value;
    
    tipo   = ( tipo   == 'vacio') ? false : tipo;
    estado = ( estado == 'vacio') ? false : estado;   
    opcion = ( opcion == 'vacio') ? false : opcion;
    
    if(tipo != false && estado != false && opcion != false){
        console.log(tipo,estado,opcion);
        alert.classList.remove("d-block");
        a(tipo,estado,opcion);
    }else{
        alert.classList.add("d-block");
    }
}
//{tipoCliente,estado,opcion}
const a = async (tipo,estado,opcion) =>{
    const resHtml = document.querySelector('.root');
    resHtml.innerHTML = "";
    const f = await fetch('https://sebastiang97.github.io/Gif_q/a.json');
    const res = await f.json();
    let atencionFCR ;
    let hp ;
    let escalado ;
    let he ;
    let instructivo;
    let escalamientoMyIT ;
    let response = '';
    response += `   
        <h2>Pasos a seguir</h2>
        <hr />  
        <br>
        <ul class="list-group">
    `;
    res.map(data => {
        if(
            data.tipoCliente == tipo && 
            data.estado == estado
        ){
            response +=  `
                <li class="opcion">${data[opcion]}</li>
            `;
            atencionFCR = data.atencionFCR;
            hp = data.herramientasPrimerContacto;
            escalado = data.escaladoCentroVigilancia;
            he = data.herramientaEscalamiento;
            instructivo = data.instructivo;
            escalamientoMyIT =  data.escalamientoMyIT;
        }
    })

    response += `
        </ul>
        <table>
            <tr >
                <th>Atención FCR</th>
                <th>Herramientas en primer contacto</th>
                <th>Escalado centro de vigilancia</th>
                <th>Herramientas de escalamiento</th>
                <th>Instructivo </th>
                <th>Escalamiento por MyIT - Cobranza </th>
            </tr>
            <tr>
                <td>${atencionFCR}</td>
                <td>${hp}</td>
                <td>${escalado}</td>
                <td>${he}</td>
                <td>${instructivo}</td>
                <td>${escalamientoMyIT}</td>
            </tr>
        </div>
        </table>
        

    `;
    resHtml.innerHTML += response;
    
}