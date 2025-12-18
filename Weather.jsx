import React, { useState } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaWind, FaSmog, FaCloudSun, FaTemperatureHigh } from 'react-icons/fa';

const mockCities = [
 { city: 'Karachi', weather: 'Sunny', temp: '31°C' },
 { city: 'Lahore', weather: 'Cloudy', temp: '28°C' },
 { city: 'Islamabad', weather: 'Rainy', temp: '24°C' },
 { city: 'Rawalpindi', weather: 'Partly Cloudy', temp: '25°C' },
 { city: 'Faisalabad', weather: 'Sunny', temp: '30°C' },
 { city: 'Multan', weather: 'Hot', temp: '34°C' },
 { city: 'Hyderabad', weather: 'Humid', temp: '33°C' },
 { city: 'Peshawar', weather: 'Windy', temp: '26°C' },
 { city: 'Quetta', weather: 'Cold', temp: '12°C' },
 { city: 'Sialkot', weather: 'Cloudy', temp: '27°C' },
 { city: 'Gujranwala', weather: 'Hazy', temp: '29°C' },
 { city: 'Sukkur', weather: 'Sunny', temp: '35°C' },
 { city: 'Bahawalpur', weather: 'Hot', temp: '33°C' },
 { city: 'Mardan', weather: 'Clear', temp: '23°C' },
 { city: 'Abbottabad', weather: 'Cold', temp: '14°C' },
 { city: 'Gilgit', weather: 'Snowy', temp: '5°C' },
 { city: 'Skardu', weather: 'Freezing', temp: '2°C' },
 { city: 'Mirpurkhas', weather: 'Humid', temp: '32°C' },
 { city: 'Larkana', weather: 'Hot', temp: '36°C' },
 { city: 'Gwadar', weather: 'Breezy', temp: '28°C' },
];

export default function Weather() {
  const [cities] = useState(mockCities);

  const weatherIcons = {
    Sunny: <FaSun color="#f1c40f" />,
    Hot: <FaTemperatureHigh color="#e74c3c" />,
    Cloudy: <FaCloud color="#95a5a6" />,
    'Partly Cloudy': <FaCloudSun color="#f39c12" />,
    Rainy: <FaCloudRain color="#3498db" />,
    Snowy: <FaSnowflake color="#3498db" />,
    Freezing: <FaSnowflake color="#2980b9" />,
    Windy: <FaWind color="#7f8c8d" />,
    Hazy: <FaSmog color="#95a5a6" />,
    Humid: <FaCloud color="#16a085" />,
    Clear: <FaSun color="#f39c12" />,
    Cold: <FaTemperatureHigh color="#2980b9" />,
    Breezy: <FaWind color="#1abc9c" />,
  };

  return (
    <section className="page container">
      <h2>Weather</h2>
      <p>Select a city to see current condition:</p>

      <div className="list">
        {cities.map((c) => (
          <div className="list-item" key={c.city} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong>{c.city}</strong>
              <span className="muted">{weatherIcons[c.weather]}</span>
              <div className="muted">{c.weather}</div>
            </div>
            <div className="price">{c.temp}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
