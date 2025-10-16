# Aplicación del Clima Pixel-Art
Tarea api clima con tematica pixel 8 bit
App del clima con estilo retro de 8-bits y colores de atardecer, desarrollada con React y la API de OpenWeatherMap.

📋 Descripción
Clima Pixel es una aplicación web interactiva que permite consultar el pronóstico meteorológico de cualquier ciudad del mundo. Combina funcionalidad moderna con una estética nostálgica inspirada en videojuegos clásicos de 8-bits, utilizando una paleta de colores cálidos que evocan un hermoso atardecer.
✨ Características Principales

🔍 Búsqueda global: Consulta el clima de cualquier ciudad del mundo
🎨 Diseño pixel art: Interfaz retro con efectos visuales de videojuegos clásicos
🌅 Paleta de atardecer: Colores rosados, anaranjados y amarillos
📊 Datos completos: Temperatura, humedad, viento, presión y visibilidad
🎮 Efectos interactivos: Botones con animaciones tipo videojuego
📱 Diseño responsivo: Funciona perfectamente en móvil, tablet y escritorio
⚡ Datos en tiempo real: Información actualizada mediante API

🛠️ Tecnologías Utilizadas

React 18+ - Framework de JavaScript
Tailwind CSS - Framework de estilos
Lucide React - Librería de iconos
OpenWeatherMap API - Datos meteorológicos
Google Fonts (Press Start 2P) - Tipografía pixel art

📦 Estructura del Proyecto
pixel-weather-app/
│
├── src/
│   ├── App.jsx              # Componente principal
│   └── index.css            # Estilos globales
│
├── public/
│   └── index.html           # HTML base
│
├── package.json             # Dependencias del proyecto
└── README.md               # Este archivo
🚀 Cómo Ejecutar el Proyecto
Prerrequisitos

Node.js (versión 14 o superior)
npm o yarn
Una clave API de OpenWeatherMap (gratuita)


Instalación
Clona este repositorio:
bash   git clone https://github.com/tu-usuario/pixel-weather-app.git
   cd pixel-weather-app

Instala las dependencias:
bash   npm install

Configura tu API Key:
Regístrate en OpenWeatherMap para obtener una API key gratuita
Abre el archivo src/App.jsx
Reemplaza 'TU_API_KEY_AQUI' con tu clave API:

javascript   const API_KEY = 'tu_clave_api_real';

Inicia el servidor de desarrollo:
bash   npm start
Abre tu navegador:
Navega a http://localhost:3000
¡Disfruta de la aplicación!


💻 Uso de la Aplicación
Buscar clima:
Escribe el nombre de una ciudad en el campo de búsqueda
Presiona Enter o haz clic en el botón "BUSCAR"


Ver información:
Temperatura actual y sensación térmica
Descripción del clima (soleado, nublado, lluvioso, etc.)
Humedad relativa del aire
Velocidad del viento
Presión atmosférica
Visibilidad
Temperaturas mínima y máxima del día


Interfaz interactiva:
Los botones tienen efectos de "presión" al hacer clic
Los iconos cambian según las condiciones climáticas
Diseño adaptable a cualquier dispositivo



🎨 Paleta de Colores
La aplicación utiliza una paleta inspirada en atardeceres:
Rosa: #FF6B9D - Color primario
Naranja claro: #FFA07A - Color secundario
Amarillo: #FFD93D - Color de acento
Tonos pastel: Variaciones de rosa y naranja para tarjetas y fondos

🧩 Componentes Principales
PixelWeatherApp
Componente principal que maneja:

Estado de la aplicación (ciudad, clima, carga, errores)
Llamadas a la API de OpenWeatherMap
Renderizado condicional de la interfaz
Manejo de eventos de usuario

Funciones clave:

getWeather() - Obtiene datos del clima de la API
getWeatherIcon() - Selecciona el icono apropiado según condiciones
handleKeyPress() - Permite buscar presionando Enter


Tarjeta principal con temperatura e icono animado
Grid de estadísticas con 4 métricas importantes
Barra de temperaturas mínima y máxima

🐛 Solución de Problemas
Error: "Ciudad no encontrada"

Verifica la ortografía del nombre de la ciudad
Intenta usar el nombre en inglés
Asegúrate de tener conexión a internet

Error: "No se pudo obtener el clima"

Verifica tu API key en el código
Confirma que tu API key esté activa (puede tardar unos minutos después del registro)
Revisa la consola del navegador para más detalles

Estilos no se ven correctamente

Asegúrate de que Tailwind CSS esté correctamente instalado
Verifica que Google Fonts esté cargando (requiere conexión a internet)


📝 Proceso de Desarrollo
Uso de IA en el Desarrollo
Durante el desarrollo, utilicé asistentes de IA para:

Estructurar componentes de React
Depurar errores de API
Optimizar estilos CSS
Implementar efectos visuales
Mejorar el manejo de errores


📄 Licencia
Este proyecto es de código abierto y está disponible bajo la Licencia MIT.
🙏 Agradecimientos

OpenWeatherMap por proporcionar la API gratuita
Google Fonts por la tipografía Press Start 2P
Lucide por los iconos
Comunidad de React por la documentación y recursos


