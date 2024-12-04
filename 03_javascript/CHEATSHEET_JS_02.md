### **JavaScript Básico Cheatsheet**

#### **1. VARIABLES**
- Declaración de variables:
  ```javascript
  let x = 10;  // Puede cambiarse
  const y = 20; // Constante, no puede reasignarse
  var z = 30;  // Obsoleta, usa `let` en su lugar
  ```

#### **2. TIPOS DE DATOS**
- **Primitivos**:
  ```javascript
  let num = 42;           // Number
  let str = "Hola";       // String
  let bool = true;        // Boolean
  let nulo = null;        // Null
  let indefinido;         // Undefined
  let symbol = Symbol();  // Symbol
  ```
- **Referencia**:
  ```javascript
  let arr = [1, 2, 3];    // Array
  let obj = { clave: "valor" };  // Object
  ```

#### **3. FUNCIONES**
- Declaración:
  ```javascript
  function suma(a, b) {
    return a + b;
  }
  ```
- Funciones anónimas y flecha:
  ```javascript
  const multiplicar = function (a, b) {
    return a * b;
  };

  const dividir = (a, b) => a / b;
  ```

#### **4. LOOPS (BUCLES)**
- **For**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```
- **While**:
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- **For...of** (arrays):
  ```javascript
  let arr = [10, 20, 30];
  for (let num of arr) {
    console.log(num);
  }
  ```
- **For...in** (objetos):
  ```javascript
  let obj = { a: 1, b: 2 };
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  ```

#### **5. CONDICIONALES**
- **If...else**:
  ```javascript
  let edad = 18;
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
  ```
- **Switch**:
  ```javascript
  let dia = "lunes";
  switch (dia) {
    case "lunes":
      console.log("Inicio de semana");
      break;
    case "viernes":
      console.log("Fin de semana");
      break;
    default:
      console.log("Día cualquiera");
  }
  ```

#### **6. MANIPULACIÓN DEL DOM**
- **Seleccionar elementos**:
  ```javascript
  const div = document.getElementById("miDiv");
  const clases = document.getElementsByClassName("miClase");
  const select = document.querySelector("#miDiv");
  const selectAll = document.querySelectorAll(".miClase");
  ```
- **Modificar contenido**:
  ```javascript
  let div = document.getElementById("miDiv");
  div.textContent = "Texto nuevo";
  div.innerHTML = "<strong>Texto en negrita</strong>";
  ```
- **Modificar estilos**:
  ```javascript
  div.style.color = "red";
  div.style.backgroundColor = "blue";
  ```
- **Crear elementos**:
  ```javascript
  let nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = "Soy nuevo";
  document.body.appendChild(nuevoDiv);
  ```

#### **7. EVENTOS**
- **Agregar eventos**:
  ```javascript
  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    alert("Botón presionado");
  });
  ```
- **Remover eventos**:
  ```javascript
  boton.removeEventListener("click", miFuncion);
  ```

#### **8. TEMPORIZADORES**
- **setTimeout**:
  Ejecuta una función una sola vez después de un tiempo.
  ```javascript
  setTimeout(() => {
    console.log("Esto aparece después de 2 segundos");
  }, 2000);
  ```
- **setInterval**:
  Ejecuta una función repetidamente con un intervalo de tiempo.
  ```javascript
  const intervalo = setInterval(() => {
    console.log("Esto aparece cada 1 segundo");
  }, 1000);
  ```
- **clearInterval**:
  Detiene un intervalo.
  ```javascript
  clearInterval(intervalo);
  ```

#### **9. MÉTODOS ÚTILES**
- **Arrays**:
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4);   // Añadir al final
  arr.pop();     // Eliminar del final
  arr.shift();   // Eliminar del inicio
  arr.unshift(0); // Añadir al inicio
  arr.forEach(num => console.log(num)); // Iterar
  ```
- **Strings**:
  ```javascript
  let str = "Hola Mundo";
  str.toUpperCase();      // Convertir a mayúsculas
  str.toLowerCase();      // Convertir a minúsculas
  str.includes("Hola");   // Buscar texto
  str.split(" ");         // Dividir por espacios
  ```

#### **10. EJEMPLOS COMPLETOS**
- **Formulario básico**:
  ```html
  <form id="miFormulario">
    <input type="text" id="nombre" />
    <button type="submit">Enviar</button>
  </form>
  <script>
    document.getElementById("miFormulario").addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`Hola, ${nombre}`);
    });
  </script>
  ```
- **Reloj en tiempo real**:
  ```javascript
  setInterval(() => {
    const ahora = new Date();
    console.log(ahora.toLocaleTimeString());
  }, 1000);
  ```

¡Con esta hoja de referencia tendrás los conceptos básicos de JavaScript siempre a mano! 😊
