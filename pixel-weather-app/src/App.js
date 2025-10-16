import React, { useState } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, Gauge } from 'lucide-react';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'; 

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Por favor ingresa una ciudad');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );

      if (!response.ok) {
        throw new Error('Ciudad no encontrada');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError('No se pudo obtener el clima. Verifica el nombre de la ciudad.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition) => {
    const iconClass = "w-24 h-24 drop-shadow-lg";
    if (condition.includes('rain') || condition.includes('drizzle')) {
      return <CloudRain className={iconClass} color="#FF6B9D" />;
    } else if (condition.includes('cloud')) {
      return <Cloud className={iconClass} color="#FFB5C2" />;
    } else if (condition.includes('clear')) {
      return <Sun className={iconClass} color="#FFD93D" />;
    } else {
      return <Wind className={iconClass} color="#FFA07A" />;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(to bottom, #FF6B9D 0%, #FFA07A 50%, #FFD93D 100%)',
      fontFamily: '"Press Start 2P", cursive'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-border {
          box-shadow: 
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000,
            8px 8px 0 0 rgba(0,0,0,0.3);
          image-rendering: pixelated;
        }

        .pixel-button {
          box-shadow: 
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000,
            4px 4px 0 0 rgba(0,0,0,0.3);
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .pixel-button:hover {
          transform: translate(2px, 2px);
          box-shadow: 
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000,
            2px 2px 0 0 rgba(0,0,0,0.3);
        }

        .pixel-button:active {
          transform: translate(4px, 4px);
          box-shadow: 
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000;
        }

        .pixel-input {
          box-shadow: 
            inset 4px 4px 0 0 rgba(0,0,0,0.2),
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000;
        }

        .stat-card {
          box-shadow: 
            0 0 0 2px #000,
            0 0 0 4px #fff,
            0 0 0 6px #000,
            6px 6px 0 0 rgba(0,0,0,0.2);
        }
      `}</style>

      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl mb-4 text-white" style={{
            textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
          }}>
            CLIMA PIXEL
          </h1>
          <p className="text-xs md:text-sm text-white opacity-90">
            Tu pronóstico en 8-bits
          </p>
        </div>

        {/* Search Card */}
        <div className="pixel-border bg-gradient-to-br from-pink-300 to-orange-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ingresa ciudad..."
              className="pixel-input flex-1 px-4 py-3 text-sm bg-white text-gray-800 outline-none"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
            />
            <button
              onClick={getWeather}
              disabled={loading}
              className="pixel-button px-6 py-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white text-sm font-bold disabled:opacity-50"
            >
              {loading ? 'CARGANDO...' : 'BUSCAR'}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-3 bg-red-300 border-4 border-black text-xs text-red-900">
              {error}
            </div>
          )}
        </div>

        {/* Weather Display */}
        {weather && (
          <div className="space-y-4">
            {/* Main Weather Card */}
            <div className="pixel-border bg-gradient-to-br from-orange-200 to-pink-200 p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl mb-2 text-gray-800">
                  {weather.name}, {weather.sys.country}
                </h2>
                <p className="text-xs text-gray-600 capitalize">
                  {weather.weather[0].description}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center mb-6">
                {getWeatherIcon(weather.weather[0].main.toLowerCase())}
                <div className="text-6xl font-bold mt-4 text-gray-800" style={{
                  textShadow: '4px 4px 0 rgba(0,0,0,0.1)'
                }}>
                  {Math.round(weather.main.temp)}°C
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  Sensación: {Math.round(weather.main.feels_like)}°C
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="stat-card bg-gradient-to-br from-pink-200 to-orange-100 p-4 text-center">
                <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-xl font-bold text-gray-800">
                  {weather.main.humidity}%
                </div>
                <div className="text-xs text-gray-600 mt-1">HUMEDAD</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-orange-200 to-pink-100 p-4 text-center">
                <Wind className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                <div className="text-xl font-bold text-gray-800">
                  {Math.round(weather.wind.speed)} m/s
                </div>
                <div className="text-xs text-gray-600 mt-1">VIENTO</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-pink-200 to-orange-100 p-4 text-center">
                <Gauge className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="text-xl font-bold text-gray-800">
                  {weather.main.pressure} hPa
                </div>
                <div className="text-xs text-gray-600 mt-1">PRESIÓN</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-orange-200 to-pink-100 p-4 text-center">
                <Eye className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                <div className="text-xl font-bold text-gray-800">
                  {(weather.visibility / 1000).toFixed(1)} km
                </div>
                <div className="text-xs text-gray-600 mt-1">VISIBILIDAD</div>
              </div>
            </div>

            {/* Min/Max Temp */}
            <div className="pixel-border bg-gradient-to-r from-pink-200 to-orange-200 p-4 flex justify-around text-center">
              <div>
                <div className="text-sm text-gray-600 mb-1">MÍNIMA</div>
                <div className="text-2xl font-bold text-blue-700">
                  {Math.round(weather.main.temp_min)}°C
                </div>
              </div>
              <div className="w-px bg-gray-400"></div>
              <div>
                <div className="text-sm text-gray-600 mb-1">MÁXIMA</div>
                <div className="text-2xl font-bold text-red-600">
                  {Math.round(weather.main.temp_max)}°C
                </div>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && (
          <div className="pixel-border bg-gradient-to-br from-orange-200 to-pink-200 p-12 text-center">
            <Sun className="w-20 h-20 mx-auto mb-4 text-yellow-500 opacity-50" />
            <p className="text-sm text-gray-600">
              Busca una ciudad para ver el clima
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-white opacity-75">
          Powered by OpenWeatherMap API
        </div>
      </div>
    </div>
  );
}