### **CheatSheet Completa de TypeScript**

TypeScript es un superset de JavaScript que introduce tipado estático, ayudando a evitar errores comunes y mejorar la productividad en el desarrollo. Aquí tienes una guía completa y práctica.

---

### **1. Configuración Básica**
#### **Instalar TypeScript**
```bash
npm install -g typescript
```

#### **Compilar un Archivo TypeScript**
```bash
tsc archivo.ts
```

#### **Inicializar un Proyecto**
```bash
tsc --init
```
Esto crea un archivo `tsconfig.json` donde puedes configurar opciones como el directorio de salida.

---

### **2. Sintaxis Básica**
#### **Declaración de Variables**
```typescript
let nombre: string = "Mario"; // Cadena de texto
let edad: number = 25; // Número
let activo: boolean = true; // Booleano

let cualquiera: any = "Hola"; // Cualquier tipo (evitar si es posible)
let desconocido: unknown = 42; // Tipo desconocido
```

#### **Arrays**
```typescript
let numeros: number[] = [1, 2, 3];
let cadenas: Array<string> = ["uno", "dos", "tres"];
```

#### **Tuplas**
```typescript
let persona: [string, number] = ["Mario", 25];
```

#### **Enums**
```typescript
enum Color {
  Rojo,
  Verde,
  Azul,
}
let colorFavorito: Color = Color.Verde;
```

---

### **3. Funciones**
#### **Declaración de Funciones**
```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```

#### **Funciones Flecha**
```typescript
const restar = (a: number, b: number): number => a - b;
```

#### **Parámetros Opcionales y Predeterminados**
```typescript
function saludar(nombre: string, saludo: string = "Hola"): string {
  return `${saludo}, ${nombre}`;
}

function sumarOpcional(a: number, b?: number): number {
  return b ? a + b : a;
}
```

#### **Tipo `void`**
```typescript
function log(mensaje: string): void {
  console.log(mensaje);
}
```

---

### **4. Objetos y Tipos Personalizados**
#### **Interfaces**
```typescript
interface Persona {
  nombre: string;
  edad: number;
}

let usuario: Persona = { nombre: "Mario", edad: 25 };
```

#### **Tipos Personalizados**
```typescript
type ID = string | number;
let userId: ID = "abc123";
userId = 42;
```

#### **Propiedades Opcionales**
```typescript
interface Producto {
  nombre: string;
  precio?: number; // Opcional
}
```

---

### **5. Clases y Herencia**
#### **Clases**
```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const mario = new Persona("Mario", 25);
mario.saludar();
```

#### **Modificadores de Acceso**
| Modificador    | Descripción                     |
|----------------|---------------------------------|
| `public`       | Accesible desde cualquier lugar.|
| `private`      | Solo accesible dentro de la clase.|
| `protected`    | Accesible en la clase y subclases.|

#### **Herencia**
```typescript
class Empleado extends Persona {
  salario: number;

  constructor(nombre: string, edad: number, salario: number) {
    super(nombre, edad);
    this.salario = salario;
  }

  mostrarSalario(): void {
    console.log(`Mi salario es ${this.salario}`);
  }
}

const juan = new Empleado("Juan", 30, 5000);
juan.mostrarSalario();
```

---

### **6. Generics (Genéricos)**
```typescript
function identidad<T>(valor: T): T {
  return valor;
}

let numero = identidad<number>(10);
let texto = identidad<string>("Hola");
```

#### **Genéricos con Interfaces**
```typescript
interface Caja<T> {
  contenido: T;
}

let cajaDeNumeros: Caja<number> = { contenido: 42 };
let cajaDeTexto: Caja<string> = { contenido: "Hola" };
```

---

### **7. Módulos**
#### **Exportar**
```typescript
export const PI = 3.14;

export function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}
```

#### **Importar**
```typescript
import { PI, saludar } from "./archivo";

saludar("Mario");
console.log(PI);
```

---

### **8. Control de Flujo y Casting**
#### **Control de Tipos**
```typescript
function esNumero(valor: any): boolean {
  return typeof valor === "number";
}
```

#### **Casting**
```typescript
let codigo: any = "123";
let longitud: number = (codigo as string).length;
```

---

### **9. Utilidades Avanzadas**
#### **Union Types**
```typescript
function imprimirId(id: string | number): void {
  console.log(`ID: ${id}`);
}
```

#### **Intersection Types**
```typescript
interface A {
  a: string;
}

interface B {
  b: string;
}

let combinado: A & B = { a: "uno", b: "dos" };
```

#### **Funciones Asíncronas**
```typescript
async function obtenerDatos(): Promise<string> {
  return "Datos obtenidos";
}

obtenerDatos().then((data) => console.log(data));
```

---

### **10. Ejemplo Completo**
```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

class Tienda {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  listarProductos(): void {
    console.log("Productos disponibles:");
    this.productos.forEach((p) =>
      console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}`)
    );
  }
}

const tienda = new Tienda();
tienda.agregarProducto({ id: 1, nombre: "Laptop", precio: 1500 });
tienda.agregarProducto({ id: 2, nombre: "Mouse", precio: 25 });
tienda.listarProductos();
```

---

### **11. Tipos de Configuración en `tsconfig.json`**
| Opción             | Descripción                                          |
|--------------------|------------------------------------------------------|
| `target`           | Especifica la versión de JavaScript para salida.     |
| `module`           | Configura el sistema de módulos (`ES6`, `CommonJS`). |
| `strict`           | Activa todas las comprobaciones estrictas.           |
| `outDir`           | Directorio de salida para archivos compilados.       |
| `rootDir`          | Directorio raíz de entrada.                          |

**Ejemplo Básico:**
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

### **12. Recursos Recomendados**
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Curso Completo de TypeScript - freeCodeCamp (YouTube)](https://www.youtube.com)
