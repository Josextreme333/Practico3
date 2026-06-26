const { useState } = React;

function App() {

    const [personas, setPersonas] = useState([]);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    function agregarPersona(e) {

        e.preventDefault();

        const nuevaPersona = {
            nombre,
            apellido,
            edad,
            altura,
            peso
        };

        setPersonas([...personas, nuevaPersona]);

        setNombre("");
        setApellido("");
        setEdad("");
        setAltura("");
        setPeso("");

    }

    function eliminarPersona(indice) {

        const copia = [...personas];

        copia.splice(indice, 1);

        setPersonas(copia);

    }

    return (

        <div>

            <form onSubmit={agregarPersona}>

                <label>Nombre</label>
                <input
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    required
                />

                <label>Apellido</label>
                <input
                    value={apellido}
                    onChange={(e)=>setApellido(e.target.value)}
                    required
                />

                <label>Edad</label>
                <input
                    type="number"
                    value={edad}
                    onChange={(e)=>setEdad(e.target.value)}
                    required
                />

                <label>Altura (m)</label>
                <input
                    type="number"
                    step="0.01"
                    value={altura}
                    onChange={(e)=>setAltura(e.target.value)}
                    required
                />

                <label>Peso (kg)</label>
                <input
                    type="number"
                    step="0.1"
                    value={peso}
                    onChange={(e)=>setPeso(e.target.value)}
                    required
                />

                <button type="submit">
                    Agregar Persona
                </button>

            </form>

            <table>

                <thead>

                    <tr>

                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Acción</th>

                    </tr>

                </thead>

                <tbody>

                    {personas.map(function(persona, indice){

                        const imc = persona.peso / (persona.altura * persona.altura);

                        return (

                            <tr key={indice}>

                                <td>{persona.nombre}</td>

                                <td>{persona.apellido}</td>

                                <td>{persona.edad}</td>

                                <td>{persona.altura}</td>

                                <td>{persona.peso}</td>

                                <td>{imc.toFixed(2)}</td>

                                <td>

                                    <button
                                        className="eliminar"
                                        onClick={function(){

                                            eliminarPersona(indice);

                                        }}
                                    >

                                        Eliminar

                                    </button>

                                </td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>

    );

}

ReactDOM.render(

    <App />,

    document.getElementById("root")

);