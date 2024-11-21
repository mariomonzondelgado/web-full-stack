### **CheatSheet Completa de JavaScript**

Esta CheatSheet cubre los fundamentos de **JavaScript** y conceptos intermedios como manipulación del DOM y eventos.

---

### **1. Sintaxis Básica**

#### **Declarar Variables**
```javascript
// Declaraciones modernas
let x = 10; // Variable que puede cambiar
const y = 20; // Variable constante (no cambia)

// Declaración antigua (evitar)
var z = 30;
```

#### **Tipos de Datos**
```javascript
// Tipos primitivos
let nombre = "Mario"; // String
let edad = 25; // Número
let esActivo = true; // Booleano
let indefinido; // Undefined
let nulo = null; // Null
let simbolo = Symbol("simbolo"); // Symbol

// Tipos no primitivos
let arreglo = [1, 2, 3]; // Array
let objeto = { nombre: "Mario", edad: 25 }; // Object
```

#### **Operadores**
```javascript
// Aritméticos
let suma = 5 + 3; // 8
let resta = 5 - 3; // 2

// Comparación
5 === 5; // true (estricta)
5 == "5"; // true (débil)

// Lógicos
true && false; // false
true || false; // true
!true; // false
```

---

### **2. Condicionales**
```javascript
// If-else
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ternario
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

// Switch
let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Otro día");
}
```

---

### **3. Bucles**

#### **For**
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```

#### **While**
```javascript
let i = 0;
while (i < 5) {
  console.log("Número:", i);
  i++;
}
```

#### **Do-While**
```javascript
let j = 0;
do {
  console.log("Número:", j);
  j++;
} while (j < 5);
```

#### **For-of y For-in**
```javascript
let arreglo = [10, 20, 30];
for (let valor of arreglo) {
  console.log(valor); // 10, 20, 30
}

let objeto = { nombre: "Mario", edad: 25 };
for (let clave in objeto) {
  console.log(clave, objeto[clave]); // nombre Mario, edad 25
}
```

---

### **4. Funciones**

#### **Declarativas**
```javascript
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Mario"));
```

#### **Funciones Flecha**
```javascript
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8
```

#### **Funciones Anónimas**
```javascript
setTimeout(function () {
  console.log("Hola después de 1 segundo");
}, 1000);
```

---

### **5. DOM (Document Object Model)**

#### **Seleccionar Elementos**
```javascript
// Por ID
let elemento = document.getElementById("miId");

// Por clase
let elementos = document.getElementsByClassName("miClase");

// Por nombre de etiqueta
let tags = document.getElementsByTagName("div");

// Usando querySelector
let selector = document.querySelector(".miClase"); // Selecciona el primer elemento
let todos = document.querySelectorAll(".miClase"); // Selecciona todos
```

#### **Manipular Contenido**
```javascript
// Cambiar texto
document.getElementById("miId").innerText = "Nuevo Texto";

// Cambiar HTML interno
document.getElementById("miId").innerHTML = "<b>Texto en negrita</b>";
```

#### **Manipular Estilos**
```javascript
document.getElementById("miId").style.color = "red";
document.getElementById("miId").style.backgroundColor = "yellow";
```

#### **Crear Elementos**
```javascript
let nuevoElemento = document.createElement("div");
nuevoElemento.innerText = "Soy un nuevo elemento";
document.body.appendChild(nuevoElemento);
```

---

### **6. Eventos**

#### **Añadir Eventos**
```javascript
// Usando HTML
// <button onclick="saludar()">Click aquí</button>

// Usando JavaScript
let boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  console.log("Botón clickeado");
});

// Evento en múltiples elementos
let botones = document.querySelectorAll(".botonClase");
botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Click en un botón");
  });
});
```

#### **Tipos Comunes de Eventos**
| Evento           | Descripción                  |
|-------------------|------------------------------|
| `click`          | Al hacer clic.               |
| `mouseover`      | Al pasar el mouse por encima.|
| `keydown`        | Al presionar una tecla.      |
| `load`           | Cuando la página carga.      |
| `submit`         | Cuando se envía un formulario.|

---

### **7. Ejemplo Completo**
Un ejemplo que combina todo:

#### **HTML**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo JavaScript</title>
</head>
<body>
  <h1 id="titulo">Hola Mundo</h1>
  <button id="cambiarTexto">Cambiar Texto</button>
  <button id="añadirElemento">Añadir Elemento</button>
  <ul id="lista"></ul>

  <script src="script.js"></script>
</body>
</html>
```

#### **JavaScript (`script.js`)**
```javascript
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
```
