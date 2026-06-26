const personas = [];

const formulario = document.getElementById("formPersona");

const tabla = document.getElementById("tablaPersonas");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const persona = {

        nombre: document.getElementById("nombre").value,

        apellido: document.getElementById("apellido").value,

        edad: Number(document.getElementById("edad").value),

        altura: Number(document.getElementById("altura").value),

        peso: Number(document.getElementById("peso").value)

    };

    personas.push(persona);

    mostrarPersonas();

    formulario.reset();

});

function mostrarPersonas(){

    tabla.innerHTML = "";

    personas.forEach((persona, indice)=>{

        const fila = document.createElement("tr");

        const imc = persona.peso / (persona.altura * persona.altura);

        fila.innerHTML = `

            <td>${persona.nombre}</td>

            <td>${persona.apellido}</td>

            <td>${persona.edad}</td>

            <td>${persona.altura}</td>

            <td>${persona.peso}</td>

            <td>${imc.toFixed(2)}</td>

            <td>

                <button class="eliminar" onclick="eliminarPersona(${indice})">
                    Eliminar
                </button>

            </td>

        `;

        tabla.appendChild(fila);

    });

}

function eliminarPersona(indice){

    personas.splice(indice,1);

    mostrarPersonas();

}