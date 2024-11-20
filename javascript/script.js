// Cambiar texto al hacer clic
document.getElementById("cambiarTexto").addEventListener("click", () => {
    document.getElementById("titulo").innerText = "Texto cambiado";
  });
  
  // Añadir elementos a la lista
  document.getElementById("añadirElemento").addEventListener("click", () => {
    let lista = document.getElementById("lista");
    let nuevoItem = document.createElement("li");
    nuevoItem.innerText = "Elemento nuevo";
    lista.appendChild(nuevoItem);
  });