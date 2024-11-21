### **CheatSheet Completa sobre React**

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario. Este documento detalla cómo crear aplicaciones básicas, trabajar con componentes, usar estados, props, hooks, enrutamiento y estilización.

---

### **1. Configuración Inicial de React**

#### **Crear una Aplicación con Create React App**
1. Instala Node.js (incluye npm).
2. Crea un proyecto React:
   ```bash
   npx create-react-app mi-app
   cd mi-app
   npm start
   ```

#### **Estructura del Proyecto**
- **`src/`**: Contiene los archivos principales.
- **`App.js`**: Componente principal.
- **`index.js`**: Punto de entrada, renderiza el componente `App`.

---

### **2. Componentes en React**

React usa componentes para dividir la interfaz en piezas reutilizables.

#### **Componentes Funcionales**
```javascript
function Saludo() {
  return <h1>¡Hola, Mundo!</h1>;
}

export default Saludo;
```

#### **Componentes de Clase (Antiguos, Evitar)**
```javascript
import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return <h1>¡Hola, Mundo!</h1>;
  }
}

export default Saludo;
```

#### **Importar y Usar Componentes**
En `App.js`:
```javascript
import Saludo from './Saludo';

function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}

export default App;
```

---

### **3. Props y State**

#### **Props (Propiedades)**
- Se usan para pasar datos de un componente padre a un hijo.
```javascript
function Saludo(props) {
  return <h1>¡Hola, {props.nombre}!</h1>;
}

export default Saludo;

// En App.js
<Saludo nombre="Mario" />
```

#### **State (Estado)**
- Es un objeto que contiene datos dinámicos.
- Solo está disponible en componentes funcionales con hooks o componentes de clase.

**Con Hooks:**
```javascript
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

**Con Componentes de Clase:**
```javascript
import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;
```

---

### **4. Hooks Básicos**

#### **useState**
- Administra estados en componentes funcionales.
```javascript
const [estado, setEstado] = useState(valorInicial);
```

#### **useEffect**
- Administra efectos secundarios como llamadas a APIs.
```javascript
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Componente montado');
    return () => {
      console.log('Componente desmontado');
    };
  }, []); // Array vacío para ejecutar una sola vez

  return <h1>¡Hola!</h1>;
}
```

#### **useContext (Avanzado)**
- Para compartir datos globales entre componentes sin props.

---

### **5. React Router**

React Router se usa para manejar la navegación.

#### **Instalación**
```bash
npm install react-router-dom
```

#### **Uso Básico**
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Inicio() {
  return <h2>Página de Inicio</h2>;
}

function AcercaDe() {
  return <h2>Acerca de Nosotros</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### **6. Estilización en React**

#### **CSS en Archivos Separados**
```javascript
import './App.css';
```

En `App.css`:
```css
h1 {
  color: blue;
}
```

#### **CSS Modules**
- Estilización localizada al componente.
```javascript
import styles from './App.module.css';

function App() {
  return <h1 className={styles.titulo}>¡Hola!</h1>;
}
```

En `App.module.css`:
```css
.titulo {
  color: red;
}
```

#### **Styled-Components**
- Usa CSS en JavaScript.
```bash
npm install styled-components
```

```javascript
import styled from 'styled-components';

const Titulo = styled.h1`
  color: green;
  font-size: 2rem;
`;

function App() {
  return <Titulo>¡Hola, Mundo!</Titulo>;
}

export default App;
```

---

### **7. Ejemplo Completo**

#### **App.js**
```javascript
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';

const Titulo = styled.h1`
  color: purple;
  text-align: center;
`;

function App() {
  const [contador, setContador] = useState(0);

  return (
    <Router>
      <Titulo>React CheatSheet</Titulo>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
      </nav>
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### **Inicio.js**
```javascript
function Inicio() {
  return <h2>Página de Inicio</h2>;
}

export default Inicio;
```

#### **AcercaDe.js**
```javascript
function AcercaDe() {
  return <h2>Acerca de Nosotros</h2>;
}

export default AcercaDe;
```

#### **App.css**
```css
nav {
  margin: 20px;
  display: flex;
  gap: 10px;
}
```

---

### **8. Recursos Recomendados**
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Router Docs](https://reactrouter.com/)
- [Styled-Components Docs](https://styled-components.com/)
- [Curso Completo de React (YouTube)](https://www.youtube.com)

Si necesitas ejemplos más específicos o un desglose más profundo, ¡puedes pedírmelo! 😊