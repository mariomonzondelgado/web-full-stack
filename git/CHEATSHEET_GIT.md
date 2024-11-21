### **CheatSheet Completa sobre Versionamiento con Git y GitHub**

Esta guía cubre los comandos básicos, cómo trabajar con repositorios en GitHub y un flujo básico para trabajar en equipo.

---

### **1. Conceptos Básicos**

- **Git:** Sistema de control de versiones que permite rastrear los cambios en el código fuente.
- **GitHub:** Plataforma para alojar repositorios remotos y colaborar con otros desarrolladores.
- **Repositorio:** Un contenedor de proyectos que incluye el código y su historial de cambios.
- **Ramas (Branches):** Versiones paralelas de un repositorio para trabajar en características sin afectar el código principal.

---

### **2. Comandos Básicos de Git**

#### **Inicializar un Repositorio**
```bash
git init
```
- Convierte una carpeta en un repositorio local de Git.

#### **Añadir Cambios al Área de Staging**
```bash
git add archivo.txt
git add .  # Añade todos los cambios en la carpeta actual
```

#### **Guardar Cambios con un Commit**
```bash
git commit -m "Mensaje descriptivo del cambio"
```
- Guarda los cambios en el historial de versiones local.

#### **Enviar Cambios al Repositorio Remoto**
```bash
git push origin main
```
- **`origin`**: El nombre del repositorio remoto.
- **`main`**: La rama principal (puede ser `master`).

#### **Actualizar el Repositorio Local desde el Remoto**
```bash
git pull origin main
```
- Descarga cambios de la rama principal en el repositorio remoto.

---

### **3. Configuración Inicial de Git**

#### **Configurar Nombre de Usuario y Correo Electrónico**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

#### **Ver Configuración Actual**
```bash
git config --list
```

---

### **4. Crear un Repositorio en GitHub**

1. **Crear Repositorio en GitHub**
   - Ve a [GitHub](https://github.com) y haz clic en **New Repository**.
   - Completa los detalles:
     - **Nombre del repositorio** (ejemplo: `mi-proyecto`).
     - **Privacidad:** Público o Privado.

2. **Conectar el Repositorio Local con el Remoto**
   ```bash
   git remote add origin https://github.com/usuario/mi-proyecto.git
   git branch -M main  # Renombrar la rama principal a 'main'
   git push -u origin main
   ```

---

### **5. Flujo Básico de Trabajo**

#### **Paso 1: Clonar un Repositorio Existente**
```bash
git clone https://github.com/usuario/mi-proyecto.git
```

#### **Paso 2: Crear una Nueva Rama para una Funcionalidad**
```bash
git checkout -b nombre-rama
```
- Crea una nueva rama y cambia a ella.

#### **Paso 3: Realizar Cambios**
Edita el código y utiliza los comandos:
```bash
git add .
git commit -m "Descripción del cambio"
```

#### **Paso 4: Subir los Cambios al Repositorio Remoto**
```bash
git push origin nombre-rama
```

#### **Paso 5: Crear un Pull Request en GitHub**
1. Ve al repositorio en GitHub.
2. Selecciona la rama en el menú desplegable.
3. Haz clic en **Pull Request**.
4. Agrega una descripción del cambio y solicita una revisión.

#### **Paso 6: Revisar y Fusionar Cambios**
- Un colaborador revisa y aprueba el Pull Request.
- Se fusiona la rama con la rama principal (`main` o `master`).

---

### **6. Trabajo en Equipo**

#### **Sincronizar Cambios Antes de Trabajar**
```bash
git pull origin main
```

#### **Resolver Conflictos**
1. Git marca los conflictos en los archivos con el siguiente formato:
   ```text
   <<<<<<< HEAD
   Versión local
   =======
   Versión remota
   >>>>>>> rama-remota
   ```
2. Edita el archivo para elegir la versión correcta.
3. Añade y commitea los cambios:
   ```bash
   git add archivo.txt
   git commit -m "Resolver conflictos"
   ```

---

### **7. Comandos Adicionales**

| Comando                         | Descripción                                              |
|---------------------------------|----------------------------------------------------------|
| `git status`                    | Verifica el estado actual del repositorio.               |
| `git log`                       | Muestra el historial de commits.                        |
| `git branch`                    | Lista las ramas locales.                                |
| `git checkout rama`             | Cambia a otra rama.                                     |
| `git merge rama`                | Fusiona una rama con la actual.                         |
| `git stash`                     | Guarda cambios no confirmados temporalmente.            |
| `git stash pop`                 | Restaura los cambios guardados con `stash`.             |
| `git diff`                      | Muestra las diferencias entre los archivos modificados. |
| `git reset archivo`             | Elimina un archivo del área de staging.                 |

---

### **8. Buenas Prácticas**

1. **Usa mensajes de commit claros:**
   - Escribe mensajes descriptivos y cortos.
   - Ejemplo: `"Corrige bug en el formulario de login"`.

2. **Crea ramas para nuevas funcionalidades:**
   - Trabaja en ramas separadas para evitar conflictos en la rama principal.

3. **Sincroniza con frecuencia:**
   - Antes de comenzar y después de terminar, usa `git pull` para actualizar tu copia local.

4. **Revisiones de código:**
   - Asegúrate de que todos los Pull Requests sean revisados antes de fusionarse.

---

### **9. Ejemplo Completo de Flujo**

#### **A. Configurar un Proyecto Nuevo**
```bash
# 1. Inicializar el repositorio
git init

# 2. Conectar al repositorio remoto
git remote add origin https://github.com/usuario/mi-proyecto.git

# 3. Crear y subir el primer commit
git add .
git commit -m "Primer commit"
git branch -M main
git push -u origin main
```

#### **B. Añadir Funcionalidad en una Nueva Rama**
```bash
# 1. Crear una nueva rama
git checkout -b nueva-funcionalidad

# 2. Hacer cambios y guardarlos
git add .
git commit -m "Añade nueva funcionalidad"

# 3. Subir cambios a la rama remota
git push origin nueva-funcionalidad
```

#### **C. Fusionar Cambios en la Rama Principal**
1. Crear un Pull Request en GitHub.
2. Revisar y aprobar el código.
3. Fusionar el Pull Request.

---

### **10. Recursos Recomendados**

- [Documentación Oficial de Git](https://git-scm.com/doc)
- [Documentación Oficial de GitHub](https://docs.github.com/)
- [Tutorial de Git y GitHub en Español (YouTube)](https://www.youtube.com/results?search_query=git+y+github+español)

Con esta CheatSheet puedes comenzar a trabajar con Git y GitHub de manera efectiva. ¿Te gustaría un ejemplo práctico o más detalles sobre algún comando? 😊
