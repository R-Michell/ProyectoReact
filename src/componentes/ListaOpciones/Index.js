import "./ListaOpciones.css"

const ListaOpciones=()=>{

    const lpersonajes=[ //creando un array
        "Anime",
        "Series",
        "Peliculas",
        "Memes",
        "Fantasia",
        "RRSS", "Historietas"
    ]
    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            {lpersonajes.map((lpersonajes,index)=> 
            <option key ={index}>{lpersonajes}</option>)}

        
        </select>
    </div>
}
export default ListaOpciones;