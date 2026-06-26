const { useState } = React;

function App() {

    const [personas, setPersonas] = useState([]);

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    function manejarCambio(e) {

        setFormulario({
            ...formulario,
            [e.target.id]: e.target.value
        });

    }

    function agregarPersona(e) {

        e.preventDefault();

        setPersonas([
            ...personas,
            {
                ...formulario,
                edad: Number(formulario.edad),
                altura: Number(formulario.altura),
                peso: Number(formulario.peso)
            }
        ]);

        setFormulario({
            nombre: "",
            apellido: "",
            edad: "",
            altura: "",
            peso: ""
        });

    }

    function eliminarPersona(indice) {

        const nuevasPersonas = personas.filter((_, i) => i !== indice);

        setPersonas(nuevasPersonas);

    }

    return (

        <>

            <form onSubmit={agregarPersona}>

                <label>Nombre</label>
                <input
                    id="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                />

                <label>Apellido</label>
                <input
                    id="apellido"
                    value={formulario.apellido}
                    onChange={manejarCambio}
                    required
                />

                <label>Edad</label>
                <input
                    type="number"
                    id="edad"
                    value={formulario.edad}
                    onChange={manejarCambio}
                    required
                />

                <label>Altura (m)</label>
                <input
                    type="number"
                    step="0.01"
                    id="altura"
                    value={formulario.altura}
                    onChange={manejarCambio}
                    required
                />

                <label>Peso (kg)</label>
                <input
                    type="number"
                    step="0.1"
                    id="peso"
                    value={formulario.peso}
                    onChange={manejarCambio}
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

                    {

                        personas.map((persona, indice) => {

                            const imc =
                                persona.peso /
                                (persona.altura * persona.altura);

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
                                            onClick={() => eliminarPersona(indice)}
                                        >
                                            Eliminar
                                        </button>

                                    </td>

                                </tr>

                            );

                        })

                    }

                </tbody>

            </table>

        </>

    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);