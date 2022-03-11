const tabla = (res,tipo,estado,opcion)=>{
    
    let response = '';
    let atencionFCR ;
    let hp ;
    let escalado ;
    let he ;
    let instructivo;
    let escalamientoMyIT ;
    response += `   
        <h2>Pasos a seguir</h2>
        <hr />  
        <br>
        <ul class="list-group">
    `;
    res.map(data =>{
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
    return response;
}

export default tabla;