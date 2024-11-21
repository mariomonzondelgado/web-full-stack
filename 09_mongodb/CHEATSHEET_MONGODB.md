# **CheatSheet sobre MongoDB**

MongoDB es una base de datos NoSQL orientada a documentos que almacena datos en formato JSON flexible. Es ideal para aplicaciones escalables y de alta disponibilidad. Este documento cubre configuración, operaciones CRUD, integración con Node.js y el uso de MongoDB Atlas.

---

### **1. Instalación y Configuración Básica**

#### **Instalar MongoDB Localmente**
1. Descarga MongoDB desde [MongoDB Community](https://www.mongodb.com/try/download/community).
2. Sigue las instrucciones para instalar en tu sistema operativo.
3. Inicia MongoDB:
   ```bash
   mongod
   ```
4. Usa el cliente de línea de comandos:
   ```bash
   mongo
   ```

#### **Instalar el Cliente Compass (GUI)**
Descarga e instala MongoDB Compass desde [Compass](https://www.mongodb.com/products/compass) para administrar visualmente tus bases de datos.

---

### **2. Crear y Leer Documentos en MongoDB**

#### **Abrir el Cliente de Línea de Comandos**
```bash
mongo
```

#### **Comandos Básicos en el Shell de MongoDB**
```javascript
// Mostrar bases de datos
show dbs

// Crear o seleccionar una base de datos
use nombreBaseDatos

// Crear una colección e insertar un documento
db.nombreColeccion.insertOne({ nombre: "Juan", edad: 30 })

// Insertar múltiples documentos
db.nombreColeccion.insertMany([
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 28 }
])

// Leer documentos
db.nombreColeccion.find()
db.nombreColeccion.find({ edad: { $gt: 25 } }) // Condición (edad > 25)

// Contar documentos
db.nombreColeccion.countDocuments()
```

---

### **3. Operaciones CRUD desde Node.js**

#### **Instalación de MongoDB Driver**
```bash
npm install mongodb
```

#### **Conexión a MongoDB Local**
```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // Conexión local
const client = new MongoClient(uri);

async function conectar() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    const db = client.db("miBaseDatos");
    return db;
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
}

conectar();
```

---

#### **Operaciones CRUD con Node.js**

1. **Crear Documentos**
```javascript
async function crearDocumento() {
  const db = await conectar();
  const resultado = await db.collection("usuarios").insertOne({ nombre: "Mario", edad: 25 });
  console.log("Documento creado:", resultado.insertedId);
}

crearDocumento();
```

2. **Leer Documentos**
```javascript
async function leerDocumentos() {
  const db = await conectar();
  const usuarios = await db.collection("usuarios").find({ edad: { $gte: 25 } }).toArray();
  console.log("Usuarios:", usuarios);
}

leerDocumentos();
```

3. **Actualizar Documentos**
```javascript
async function actualizarDocumento() {
  const db = await conectar();
  const resultado = await db.collection("usuarios").updateOne(
    { nombre: "Mario" }, // Filtro
    { $set: { edad: 30 } } // Cambios
  );
  console.log("Documentos actualizados:", resultado.modifiedCount);
}

actualizarDocumento();
```

4. **Eliminar Documentos**
```javascript
async function eliminarDocumento() {
  const db = await conectar();
  const resultado = await db.collection("usuarios").deleteOne({ nombre: "Mario" });
  console.log("Documentos eliminados:", resultado.deletedCount);
}

eliminarDocumento();
```

---

### **4. MongoDB Atlas para Bases de Datos en la Nube**

#### **Crear una Base de Datos en MongoDB Atlas**
1. Ve a [MongoDB Atlas](https://www.mongodb.com/atlas) y crea una cuenta.
2. Crea un clúster gratuito.
3. Configura la base de datos:
   - Elige una región cercana.
   - Configura los datos de acceso y la IP autorizada.
4. Conecta el clúster:
   - Copia la cadena de conexión proporcionada.

#### **Conexión desde Node.js**
```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://usuario:contraseña@cluster0.mongodb.net/miBaseDatos";
const client = new MongoClient(uri);

async function conectarAtlas() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB Atlas");
    const db = client.db("miBaseDatos");
    return db;
  } catch (err) {
    console.error("Error al conectar a MongoDB Atlas:", err);
  }
}

conectarAtlas();
```

---

### **5. Consultas Avanzadas en MongoDB**

#### **Filtros Comunes**
```javascript
// Igualdad
db.usuarios.find({ nombre: "Mario" })

// Mayor o igual
db.usuarios.find({ edad: { $gte: 25 } })

// Rango
db.usuarios.find({ edad: { $gte: 20, $lte: 30 } })

// Expresiones Regulares
db.usuarios.find({ nombre: { $regex: "^M" } })
```

#### **Proyecciones (Campos Específicos)**
```javascript
db.usuarios.find({}, { nombre: 1, _id: 0 }) // Solo mostrar "nombre", ocultar "_id"
```

#### **Ordenar y Limitar**
```javascript
db.usuarios.find().sort({ edad: -1 }).limit(5) // Orden descendente, limitar a 5 resultados
```

---

### **6. Índices para Optimización**
Los índices mejoran la velocidad de las consultas.
```javascript
db.usuarios.createIndex({ edad: 1 }) // Índice en "edad", orden ascendente
```

---

### **7. Respaldo y Restauración**

#### **Exportar Datos**
```bash
mongodump --db miBaseDatos --out respaldo/
```

#### **Importar Datos**
```bash
mongorestore --db miBaseDatos respaldo/miBaseDatos
```

---

### **8. Buenas Prácticas con MongoDB**

1. **Estructura de los Datos:**
   - Diseña tus colecciones de acuerdo con los patrones de uso.
   - Usa referencias o documentos anidados según corresponda.

2. **Valida los Documentos:**
   - Define esquemas con validación al nivel de la base de datos.

3. **Índices:**
   - Utiliza índices para optimizar consultas frecuentes, pero no abuses, ya que consumen recursos.

4. **Manejo de Errores:**
   - Siempre captura excepciones al interactuar con la base de datos.

5. **Monitorización:**
   - Usa herramientas como MongoDB Compass o el dashboard de Atlas para analizar el rendimiento.

---

### **9. Ejemplo Completo**

#### **app.js**
```javascript
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const uri = "mongodb+srv://usuario:contraseña@cluster0.mongodb.net/miBaseDatos";
const client = new MongoClient(uri);

async function conectar() {
  try {
    await client.connect();
    return client.db("miBaseDatos");
  } catch (err) {
    console.error(err);
  }
}

// Ruta para obtener usuarios
app.get("/usuarios", async (req, res) => {
  const db = await conectar();
  const usuarios = await db.collection("usuarios").find().toArray();
  res.json(usuarios);
});

// Ruta para crear un usuario
app.post("/usuarios", async (req, res) => {
  const db = await conectar();
  const resultado = await db.collection("usuarios").insertOne(req.body);
  res.json({ id: resultado.insertedId });
});

// Servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
```

---

### **10. Recursos Adicionales**

- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Node.js MongoDB Driver Docs](https://mongodb.github.io/node-mongodb-native/)
- [Curso de MongoDB Atlas (YouTube)](https://www.youtube.com)