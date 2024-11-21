### **Guía Rápida para Aprender CSS**

El CSS (Cascading Style Sheets) es el lenguaje que usamos para estilizar y dar formato a las páginas web creadas con HTML. A continuación, te enseño los conceptos básicos y avanzados de CSS de manera progresiva.

---

### **1. Sintaxis Básica de CSS**
```css
selector {
  propiedad: valor;
}
```

- **Selector:** Indica qué elementos HTML serán estilizados (ejemplo: `body`, `.clase`, `#id`).
- **Propiedad:** El aspecto que deseas cambiar (color, tamaño, fuente, etc.).
- **Valor:** Especifica cómo se verá esa propiedad.

**Ejemplo:**
```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
```

---

### **2. Métodos de Aplicar CSS**

1. **CSS en línea:** Se escribe dentro del atributo `style` del elemento HTML.  
   ```html
   <p style="color: red; font-size: 20px;">Texto rojo y grande</p>
   ```

2. **CSS interno:** Se escribe dentro de una etiqueta `<style>` en el archivo HTML.  
   ```html
   <style>
     p {
       color: red;
       font-size: 20px;
     }
   </style>
   ```

3. **CSS externo:** Se enlaza un archivo CSS separado.  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   **Archivo `styles.css`:**
   ```css
   p {
     color: red;
     font-size: 20px;
   }
   ```

---

### **3. Selectores de CSS**

| Selector         | Ejemplo             | Descripción                                      |
|------------------|---------------------|--------------------------------------------------|
| Universal        | `*`                | Aplica a todos los elementos.                   |
| Tipo             | `p`                | Aplica a todas las etiquetas `<p>`.             |
| Clase            | `.miClase`         | Aplica a elementos con `class="miClase"`.       |
| ID               | `#miId`            | Aplica a un elemento con `id="miId"`.           |
| Descendiente     | `div p`            | Selecciona `<p>` dentro de un `<div>`.          |
| Combinador hijo  | `div > p`          | Selecciona `<p>` hijo directo de `<div>`.       |
| Combinador adyacente | `h1 + p`       | Selecciona `<p>` inmediatamente después de un `<h1>`. |

**Ejemplo de CSS con clases e ID:**
```css
#cabecera {
  background-color: blue;
  color: white;
}

.tarjeta {
  border: 1px solid black;
  padding: 10px;
}
```

---

### **4. Propiedades Comunes**

#### **Colores y Fondos**
```css
/* Colores */
color: red; /* Texto */
background-color: #333; /* Fondo */

/* Fondos */
background-image: url('fondo.jpg');
background-size: cover;
background-repeat: no-repeat;
```

#### **Texto y Fuentes**
```css
/* Tipografía */
font-family: 'Arial', sans-serif;
font-size: 16px; /* Tamaño */
font-weight: bold; /* Negrita */
font-style: italic; /* Cursiva */
text-align: center; /* Alineación */
text-decoration: underline; /* Subrayado */
```

#### **Espaciado**
```css
/* Margen (fuera del elemento) */
margin: 10px; /* Margen en todos los lados */
margin-top: 5px;
margin-right: 10px;

/* Relleno (dentro del elemento) */
padding: 20px;
```

#### **Bordes y Sombra**
```css
border: 2px solid black; /* Grosor, estilo, color */
border-radius: 10px; /* Bordes redondeados */
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra */
```

#### **Dimensiones**
```css
width: 100%; /* Ancho */
height: auto; /* Altura */
max-width: 800px; /* Máximo ancho */
```

---

### **5. Layout (Diseño)**

#### **Modelo de Caja**
Cada elemento es una caja con:
- **Contenido**
- **Relleno (padding)**
- **Borde (border)**
- **Margen (margin)**

**Ejemplo:**
```css
div {
  width: 200px;
  height: 100px;
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}
```

#### **Flexbox**
Flexbox se usa para alinear y distribuir elementos en contenedores.
```css
.container {
  display: flex;
  justify-content: center; /* Alineación horizontal */
  align-items: center; /* Alineación vertical */
  gap: 10px; /* Espaciado entre elementos */
}
```

#### **Grid**
CSS Grid ayuda a crear diseños de cuadrícula.
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 10px; /* Espaciado entre elementos */
}
```

---

### **6. Animaciones y Transiciones**
#### **Transiciones**
```css
button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: green;
}
```

#### **Animaciones**
```css
@keyframes mover {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

div {
  animation: mover 2s infinite;
}
```

---

### **7. Ejemplo Completo**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de CSS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f0f0;
    }

    header {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 20px;
    }

    .tarjeta {
      background-color: white;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: green;
    }
  </style>
</head>
<body>
  <header>
    <h1>Mi Página Estilizada</h1>
  </header>
  <div class="grid-container">
    <div class="tarjeta">
      <h2>Título 1</h2>
      <p>Descripción breve del contenido.</p>
      <button>Click Aquí</button>
    </div>
    <div class="tarjeta">
      <h2>Título 2</h2>
      <p>Descripción breve del contenido.</p>
      <button>Click Aquí</button>
    </div>
    <div class="tarjeta">
      <h2>Título 3</h2>
      <p>Descripción breve del contenido.</p>
      <button>Click Aquí</button>
    </div>
  </div>
</body>
</html>
```
