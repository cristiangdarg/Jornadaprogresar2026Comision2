const alumnos = const alumnosData = [
            { id: 1, dni: "49.206.694", apellido: "Figueroa", nombre: "Malena Valentina", pdf: "FigueroaMalenaValentina.pdf" },
            { id: 2, dni: "49.205.601", apellido: "Gomez", nombre: "Rosa Agostina", pdf: "GomezRosaAgostina.pdf" },
            { id: 3, dni: "49.898.177", apellido: "Alvarado", nombre: "Nerina Constanza", pdf: "AlvaradoNerinaConstanza.pdf" },
            { id: 4, dni: "51.153.862", apellido: "Farias", nombre: "Maximiliano Miguel", pdf: "FariasMaximilianoMiguel.pdf" },
            { id: 5, dni: "48.974.382", apellido: "Machuca", nombre: "Mia Alejandra", pdf: "MachucaMiaAlejandra.pdf" },
            { id: 6, dni: "49.939.518", apellido: "Ledesma", nombre: "Liz Ayelen", pdf: "LedesmaLizAyelen.pdf" },
            { id: 7, dni: "49.284.163", apellido: "Gonzalez", nombre: "Ana Mariel", pdf: "GonzalezAnaMariel.pdf" },
            { id: 8, dni: "50.332.652", apellido: "Santillan Ibarra", nombre: "Julieta Anahi", pdf: "SantillanIbarraJulietaAnahi.pdf" },
            { id: 9, dni: "49.395.016", apellido: "Diaz Gonzalez", nombre: "Luzmila Marisol", pdf: "DiazGonzalezLuzmilaMarisol.pdf" },
            { id: 10, dni: "50.214.542", apellido: "Coronel Figueroa", nombre: "Sofia Jasmin", pdf: "CoronelFigueroaSofiaJasmin.pdf" },
            { id: 11, dni: "49.939.465", apellido: "Torrez", nombre: "Narela Nahir", pdf: "TorrezNarelaNahir.pdf" },
            { id: 12, dni: "50.212.787", apellido: "Luna", nombre: "Aylen Milena", pdf: "LunaAylenMilena.pdf" },
            { id: 13, dni: "49.147.319", apellido: "Perez Leguizamon", nombre: "Luciana Guadalupe", pdf: "PerezLeguizamonLucianaGuadalupe.pdf" },
            { id: 14, dni: "49.205.558", apellido: "Perez", nombre: "Melody Yasmin", pdf: "PerezMelodyYasmin.pdf" },
            { id: 15, dni: "47.599.105", apellido: "Perez", nombre: "Gaston Andres", pdf: "PerezGastonAndres.pdf" },
            { id: 16, dni: "49.580.051", apellido: "Santillan", nombre: "Mauro Francisco", pdf: "SantillanMauroFrancisco.pdf" },
            { id: 17, dni: "50.212.726", apellido: "Ruiz", nombre: "Maria Virginia", pdf: "RuizMariaVirginia.pdf" },
            { id: 18, dni: "48.831.628", apellido: "Reinoso", nombre: "Lautaro E.", pdf: "ReinosoLautaroE.pdf" }
        ];

const tabla = document.getElementById("tablaAlumnos");

alumnos.forEach(alumno => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${alumno.id}</td>
        <td>${alumno.dni}</td>
        <td>${alumno.apellido}</td>
        <td>${alumno.nombre}</td>
        <td>
            <a href="pdfc1/${alumno.dni}.pdf" download>
                <button>Descargar</button>
            </a>
        </td>
    `;

    tabla.appendChild(fila);
});
