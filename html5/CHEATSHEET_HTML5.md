### **CheatSheet de HTML5 - Guía Detallada**

#### **1. Estructura Básica**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la Página</title>
</head>
<body>
  <!-- Contenido aquí -->
</body>
</html>
```

---

#### **2. Etiquetas Semánticas**
HTML5 introduce etiquetas para estructurar mejor el contenido:

| Etiqueta       | Uso                                              |
|----------------|--------------------------------------------------|
| `<header>`     | Encabezado de la página o sección.               |
| `<nav>`        | Contenedor para enlaces de navegación.           |
| `<section>`    | Agrupación temática dentro de un documento.      |
| `<article>`    | Contenido independiente como un artículo o post. |
| `<aside>`      | Contenido relacionado (barra lateral, anuncios). |
| `<footer>`     | Pie de página o sección.                         |
| `<main>`       | Contenido principal de la página.                |

**Ejemplo:**
```html
<header>
  <h1>Mi Página Web</h1>
</header>
<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#sobre-mi">Sobre Mí</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
<main>
  <section id="inicio">
    <h2>Bienvenido</h2>
    <p>Este es mi sitio web.</p>
  </section>
  <section id="sobre-mi">
    <h2>Sobre Mí</h2>
    <p>Información personal.</p>
  </section>
</main>
<footer>
  <p>© 2024 Mi Nombre</p>
</footer>
```

---

#### **3. Etiquetas Comunes**
| Etiqueta      | Descripción                                  |
|---------------|----------------------------------------------|
| `<h1>`-`<h6>` | Títulos de nivel 1 (grande) a nivel 6 (pequeño). |
| `<p>`         | Párrafos de texto.                          |
| `<a>`         | Enlaces.                                    |
| `<img>`       | Imágenes.                                   |
| `<ul>`/`<ol>` | Listas desordenadas y ordenadas.            |
| `<li>`        | Elementos de una lista.                     |
| `<div>`       | Contenedor genérico.                        |
| `<span>`      | Contenedor en línea para aplicar estilos.   |

**Ejemplo de Enlaces e Imágenes:**
```html
<a href="https://example.com" target="_blank">Visitar Ejemplo</a>
<img src="imagen.jpg" alt="Descripción de la imagen">
```

---

#### **4. Formularios**
| Atributo      | Descripción                                  |
|---------------|----------------------------------------------|
| `action`      | URL a la que se envía el formulario.         |
| `method`      | Método de envío (`GET` o `POST`).            |
| `type`        | Tipo de campo (`text`, `password`, `email`, etc.). |
| `placeholder` | Texto guía dentro del campo.                |
| `required`    | Campo obligatorio.                          |

**Ejemplo Completo de Formulario:**
```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Tu email" required>

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje" required></textarea>

  <button type="submit">Enviar</button>
</form>
```

---

#### **5. Multimedia**
| Etiqueta       | Uso                                          |
|----------------|----------------------------------------------|
| `<img>`        | Insertar imágenes.                          |
| `<audio>`      | Reproducir audio.                           |
| `<video>`      | Reproducir videos.                          |
| `<source>`     | Especificar diferentes formatos de audio/video. |

**Ejemplo de Video:**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Tu navegador no soporta el elemento `<video>`.
</video>
```

**Ejemplo de Audio:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Tu navegador no soporta el elemento `<audio>`.
</audio>
```

---

#### **6. Tablas**
| Etiqueta       | Descripción                                  |
|----------------|----------------------------------------------|
| `<table>`      | Contenedor principal de la tabla.            |
| `<tr>`         | Fila de la tabla.                           |
| `<th>`         | Encabezado de columna.                      |
| `<td>`         | Celda de datos.                             |
| `<caption>`    | Título de la tabla.                         |

**Ejemplo:**
```html
<table>
  <caption>Mi Tabla de Datos</caption>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mario</td>
      <td>25</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>Luisa</td>
      <td>30</td>
      <td>Barcelona</td>
    </tr>
  </tbody>
</table>
```

---

#### **7. Atributos Globales**
Los atributos globales pueden aplicarse a casi cualquier etiqueta.

| Atributo       | Descripción                                  |
|----------------|----------------------------------------------|
| `id`           | Identificador único del elemento.           |
| `class`        | Clase para aplicar estilos con CSS.         |
| `style`        | Estilos en línea (no recomendado).          |
| `title`        | Texto informativo al pasar el cursor.       |
| `data-*`       | Atributos personalizados para almacenar datos. |

**Ejemplo:**
```html
<div id="miDiv" class="miClase" title="Tooltip">Contenido</div>
```

---

#### **8. Metadatos y SEO**
| Etiqueta       | Uso                                          |
|----------------|----------------------------------------------|
| `<meta>`       | Información sobre el documento.             |
| `<title>`      | Título que aparece en la pestaña del navegador. |
| `<link>`       | Vinculación externa (CSS, íconos).          |

**Ejemplo de Metadatos:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Descripción de mi página">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="Tu Nombre">
  <link rel="stylesheet" href="styles.css">
</head>
```

---

#### **9. Buenas Prácticas**
1. Usa etiquetas semánticas para mejorar la accesibilidad y SEO.
2. Añade descripciones significativas en el atributo `alt` de las imágenes.
3. Organiza el código con una indentación consistente.
4. Usa comentarios para documentar partes importantes del código:
   ```html
   <!-- Este es un comentario -->
   ```

---