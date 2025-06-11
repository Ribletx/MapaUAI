# Mapa UAI

Aplicación web desarrollada con React que utiliza estructura modular para organizar los componentes, datos y recursos. El objetivo es desarrollar un mapa dinámico e interactivo a fin de ser útil para todos los estudiantes, profesores y funcionarios UAI.

## 🗂 Estructura del Proyecto

```plaintext
.
├── public/
├── src/
│   ├── components/
│   │   ├── AppFooter.js                # Footer
│   │   ├── AppHeader.js                # Header
│   │   ├── BuildingMap.js              # Muestra el mapa del edificio y permite navegación
│   │   ├── BuildingRoomDetail.js       # Muestra el detalle de la sala cuando se selecciona
│   │   ├── CafeteriaDetail.js          # Detalle de cafetería (Borrable/Revisar)
│   │   ├── LenguageContext.js          # Contexto del lenguaje (palabras en ambos idiomas)
│   │   └── LenguageSelector.js         # Botón de selección de lenguaje
│   ├── data/
│   │   └── menu.json                   # Precios de cafetería
│   ├── App.js                          # Componente principal de la aplicación
│   ├── index.js                        # Punto de entrada de React (renderiza App)
│   └── styles.css                      # Importación Tailwind
├── .gitignore                          # Lista de archivos/directorios ignorados por Git
├── package-lock.json                   # Dependencias y scripts del proyecto
├── package.json                        # Configuración básica
├── postcss.config.js                   # Configuración de Tailwind
├── README.md                           # Este archivo
└── tailwind.config.js                  # Configuración de Tailwind
```

## 🚀 Cómo ejecutar el proyecto

Sigue estos pasos para ejecutar la aplicación localmente en tu máquina:

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias

⚠️ Las dependencias necesarias están definidas en el archivo `package.json`, pero no están incluidas en el repositorio debido al archivo `.gitignore`.

Ejecuta:

```bash
npm install
```

### 3. Inicia la aplicación

```bash
npm start
```

Esto abrirá automáticamente tu navegador en [http://localhost:3000/](http://localhost:3000/), donde podrás visualizar la página web en funcionamiento.
