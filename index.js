function agregarNota() {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    if (titulo === "" || descripcion === "") {
        alert("Completa todos los campos");
        return;
    }

    const contenedor = document.getElementById("notas");

    const nota = document.createElement("div");
    nota.classList.add("nota");

    nota.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <div class="iconos">
            <span onclick="destacarNota(this)">☆</span>
            <span onclick="eliminarNota(this)">🗑️</span>
        </div>
    `;

    contenedor.appendChild(nota);

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
}

function destacarNota(elemento) {
    const nota = elemento.closest(".nota");

    nota.classList.toggle("destacada");

    if (nota.classList.contains("destacada")) {
        elemento.textContent = "★";
    } else {
        elemento.textContent = "☆";
    }
}

function eliminarNota(elemento) {
    const nota = elemento.closest(".nota");
    nota.remove();
}
