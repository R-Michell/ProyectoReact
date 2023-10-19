import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones/Index.js"
import Boton from "../Boton"

// const Formulario=()=>{
//     return <section className="formulario">
//         <form>
//             <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSNAJE.</h2>
//                 <Texto titulo= "Nombre" placeholder="Ingresar Nombre"/>
//                 <Texto titulo= "Rango" placeholder="Ingresar Rango"/>
//                 <Texto titulo= "Foto" placeholder="Ingresar Enlace de la Foto"/> 
//                 <ListaOpciones/>
//                 <Boton>Crear</Boton>
//         </form>
//     </section>
// }

const Formulario=()=>{
    const envio=(evento)=>{
        evento.preventDefault();
        //console.log(envio, evento);
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSNAJE.</h2>
                <Texto titulo= "Nombre" placeholder="Ingresar Nombre"/>
                <Texto titulo= "Rango" placeholder="Ingresar Rango"/>
                <Texto titulo= "Foto" placeholder="Ingresar Enlace de la Foto"/> 
                <ListaOpciones/>
                <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario 