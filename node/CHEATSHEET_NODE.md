### **CheatSheet Detallada sobre Node.js**

Node.js es un entorno de ejecución de JavaScript basado en el motor **V8** de Google Chrome. Permite ejecutar JavaScript fuera del navegador y se utiliza principalmente para construir aplicaciones del lado del servidor.

---

### **1. ¿Qué es Node.js?**

- **Características principales:**
  - **Asíncrono y basado en eventos:** Las operaciones no bloquean el flujo de ejecución.
  - **Single-threaded:** Aunque usa un solo hilo para manejar las solicitudes, aprovecha la concurrencia mediante el bucle de eventos.
  - **Extensible:** Compatible con miles de módulos a través de **npm** (Node Package Manager).
  - **Multiplataforma:** Funciona en Windows, macOS y Linux.

- **¿Por qué usar Node.js?**
  - Ideal para aplicaciones en tiempo real (chat, streaming).
  - Manejo eficiente de múltiples solicitudes concurrentes.
  - Reutilización del conocimiento de JavaScript para backend.

---

### **2. Instalar Node.js**

1. Descarga Node.js desde [nodejs.org](https://nodejs.org/).
2. Verifica la instalación:
   ```bash
   node -v   # Muestra la versión de Node.js
   npm -v    # Muestra la versión de npm
   ```

---

### **3. Crear tu Primer Programa con Node.js**

#### **Hola Mundo**
Crea un archivo llamado `app.js`:
```javascript
console.log("¡Hola, Node.js!");
```

Ejecuta el archivo con:
```bash
node app.js
```

#### **Usar el Módulo `os` para Obtener Información del Sistema**
```javascript
const os = require("os");

console.log("Sistema Operativo:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("Memoria Libre:", os.freemem());
```

---

### **4. Crear un Servidor Simple con Node.js**

#### **Módulo `http`**
El módulo `http` permite crear servidores web.

1. Crea un archivo llamado `server.js`:
   ```javascript
   const http = require("http");

   // Crear el servidor
   const server = http.createServer((req, res) => {
     // Configuración de la respuesta
     res.statusCode = 200; // Código de estado HTTP
     res.setHeader("Content-Type", "text/plain");
     res.end("¡Hola, Mundo desde Node.js!\n");
   });

   // Servidor escucha en el puerto 3000
   const PORT = 3000;
   server.listen(PORT, () => {
     console.log(`Servidor corriendo en http://localhost:${PORT}`);
   });
   ```

2. Ejecuta el servidor:
   ```bash
   node server.js
   ```

3. Abre tu navegador y visita `http://localhost:3000`. Verás el mensaje `¡Hola, Mundo desde Node.js!`.

---

### **5. Crear un Servidor que Devuelve HTML**

Modifica el archivo `server.js` para responder con HTML:
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Servidor Node.js</title>
      </head>
      <body>
        <h1>Bienvenido a Node.js</h1>
        <p>Este es un servidor básico que responde con HTML.</p>
      </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

---

### **6. Manejo de Rutas Básico**

Agrega diferentes respuestas según la URL:
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Inicio");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Acerca de");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página no encontrada");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

---

### **7. Integrar el Módulo `fs` (Sistema de Archivos)**

Lee un archivo HTML y responde con su contenido:
```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error interno del servidor");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Crea un archivo `index.html` en el mismo directorio:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Node.js con fs</title>
</head>
<body>
  <h1>¡Hola desde un archivo HTML!</h1>
</body>
</html>
```

---

### **8. Resumen de Comandos y Módulos Básicos**

| **Comando/Módulo**       | **Descripción**                                               |
|--------------------------|--------------------------------------------------------------|
| `require("modulo")`      | Importa un módulo nativo o instalado de Node.js.             |
| `http.createServer()`    | Crea un servidor HTTP.                                       |
| `fs.readFile()`          | Lee un archivo del sistema.                                  |
| `os.platform()`          | Devuelve el sistema operativo.                               |
| `res.end()`              | Finaliza la respuesta al cliente.                            |
| `res.setHeader()`        | Configura un encabezado HTTP.                                |
| `console.log()`          | Imprime mensajes en la consola.                              |

---

### **9. Flujo Básico de Trabajo**

1. **Configura Node.js:**
   - Instala Node.js.
   - Inicializa un proyecto con `npm init`.

2. **Escribe tu Código:**
   - Usa `http` para crear servidores.
   - Usa `fs` para trabajar con archivos.

3. **Ejecuta el Servidor:**
   ```bash
   node server.js
   ```

4. **Prueba tu Aplicación:**
   - Visita `http://localhost:3000`.

---

### **10. Recursos Recomendados**

- [Documentación Oficial de Node.js](https://nodejs.org/en/docs/)
- [Guía de Node.js en freeCodeCamp](https://www.freecodecamp.org/)
- [Curso de Node.js para Principiantes (YouTube)](https://www.youtube.com)
