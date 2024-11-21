### **CheatSheet Completa y Detallada sobre Node.js y Express**

Express.js es un framework minimalista para Node.js que facilita la creación de servidores web. Aquí tienes una guía completa para configurarlo, crear rutas, usar middleware y trabajar con JSON.

---

### **1. Configurar un Servidor con Express**

#### **Instalar Node.js y Express**
1. Asegúrate de tener Node.js instalado.
2. Crea un proyecto con `npm` y Express:
   ```bash
   mkdir proyecto-express
   cd proyecto-express
   npm init -y
   npm install express
   ```

#### **Estructura Básica del Servidor**
Crea un archivo `index.js` con el siguiente código:
```javascript
const express = require('express');
const app = express();

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express!');
});

// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Ejecuta el servidor:
```bash
node index.js
```

Visita `http://localhost:3000` en tu navegador para probarlo.

---

### **2. Crear Rutas (GET, POST, PUT, DELETE)**

#### **Crear Rutas Básicas**
```javascript
// Ruta GET
app.get('/usuarios', (req, res) => {
  res.send('Lista de usuarios');
});

// Ruta POST
app.post('/usuarios', (req, res) => {
  res.send('Usuario creado');
});

// Ruta PUT
app.put('/usuarios/:id', (req, res) => {
  res.send(`Usuario con ID ${req.params.id} actualizado`);
});

// Ruta DELETE
app.delete('/usuarios/:id', (req, res) => {
  res.send(`Usuario con ID ${req.params.id} eliminado`);
});
```

- **`req.params`**: Extrae parámetros de la URL (`:id`).
- **`req.body`**: Contiene datos enviados en una solicitud POST/PUT (ver JSON más adelante).

---

### **3. Middleware en Express**

#### **¿Qué es un Middleware?**
Un middleware es una función que tiene acceso a `req`, `res` y `next`. Se utiliza para ejecutar código antes de que una solicitud llegue a la ruta.

#### **Middleware Global**
```javascript
// Middleware global (se ejecuta en cada solicitud)
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); // Llama al siguiente middleware o ruta
});
```

#### **Middleware Incorporado**
- **`express.json()`**: Para trabajar con datos JSON.
- **`express.urlencoded()`**: Para datos enviados desde formularios.

```javascript
app.use(express.json()); // Middleware para JSON
app.use(express.urlencoded({ extended: true })); // Para formularios
```

#### **Middleware Personalizado**
```javascript
function verificarToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token requerido');
  }
  console.log(`Token recibido: ${token}`);
  next();
}

// Aplicar a rutas específicas
app.get('/protegido', verificarToken, (req, res) => {
  res.send('Ruta protegida');
});
```

---

### **4. Trabajar con Datos JSON**

#### **Enviar y Recibir JSON**
- **Enviar JSON desde el servidor:**
  ```javascript
  app.get('/productos', (req, res) => {
    const productos = [
      { id: 1, nombre: 'Producto A', precio: 100 },
      { id: 2, nombre: 'Producto B', precio: 200 },
    ];
    res.json(productos);
  });
  ```

- **Recibir JSON desde el cliente:**
  ```javascript
  app.post('/productos', (req, res) => {
    const nuevoProducto = req.body; // Datos enviados en la solicitud
    console.log('Producto recibido:', nuevoProducto);
    res.status(201).json({ mensaje: 'Producto creado', producto: nuevoProducto });
  });
  ```

#### **Enviar Códigos de Estado HTTP**
```javascript
app.get('/error', (req, res) => {
  res.status(404).send('Recurso no encontrado');
});
```

---

### **5. Manejo de Errores**

#### **Middleware para Errores**
```javascript
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});
```

#### **Ejemplo con Manejo de Errores**
```javascript
app.get('/fallar', (req, res) => {
  throw new Error('Algo salió mal'); // Genera un error
});

// Middleware de error debe ir al final
app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});
```

---

### **6. Estructura de Proyecto Escalable**

#### **Separar Rutas en Archivos**
1. **Crear Archivo de Rutas:**
   - Crea un archivo `routes/usuarios.js`:
     ```javascript
     const express = require('express');
     const router = express.Router();

     router.get('/', (req, res) => {
       res.send('Lista de usuarios');
     });

     router.post('/', (req, res) => {
       res.send('Usuario creado');
     });

     module.exports = router;
     ```

2. **Importar las Rutas:**
   En `index.js`:
   ```javascript
   const usuariosRouter = require('./routes/usuarios');
   app.use('/usuarios', usuariosRouter);
   ```

---

### **7. Ejemplo Completo**

#### **index.js**
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express!');
});

app.post('/productos', (req, res) => {
  const producto = req.body;
  res.status(201).json({ mensaje: 'Producto creado', producto });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Error en el servidor' });
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

#### **POST con JSON**
Envía una solicitud POST con JSON usando herramientas como **Postman** o **curl**:
```bash
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Producto A","precio":100}'
```

---

### **8. Recursos Adicionales**

| Recurso                          | Descripción                                    |
|----------------------------------|------------------------------------------------|
| [Express.js Docs](https://expressjs.com/) | Documentación oficial de Express.js.         |
| [Postman](https://www.postman.com/) | Herramienta para probar APIs.                |
| [Node.js Docs](https://nodejs.org/en/docs/) | Documentación oficial de Node.js.            |