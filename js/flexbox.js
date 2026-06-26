const juegos = [
    {
        nombre: "Persona 3 Reload",
        genero: "JRPG"
    },
    {
        nombre: "Persona 5 Royal",
        genero: "JRPG"
    },
    {
        nombre: "Genshin Impact",
        genero: "ARPG"
    },
    {
        nombre: "Zenless Zone Zero",
        genero: "ARPG"
    },
    {
        nombre: "Monster Hunter World",
        genero: "Acción"
    },
    {
        nombre: "NieR Automata",
        genero: "Action RPG"
    }
];

const contenedor = document.getElementById("contenedor");

function mostrarTarjetas() {

    contenedor.innerHTML = "";

    juegos.forEach(juego => {

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `
            <h3>${juego.nombre}</h3>
            <p>Género: ${juego.genero}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}

mostrarTarjetas();

document.getElementById("btnOrdenar").addEventListener("click", () => {

    juegos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    mostrarTarjetas();

});

document.getElementById("btnResaltar").addEventListener("click", () => {

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {
        tarjeta.classList.toggle("resaltada");
    });

});