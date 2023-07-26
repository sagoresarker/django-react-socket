import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import './App.css'; // Import the CSS file for styling

const socket = io('http://127.0.0.1:8000/');

const App = () => {
  const [location, setLocation] = useState(null);
  const [locationsData, setLocationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            axios.post('http://127.0.0.1:8000/api/update_location/', { latitude, longitude })
              .then((response) => {
                console.log(response.data.message);
              })
              .catch((error) => {
                console.error('Error sending location data:', error);
              });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not available in this browser.');
      }
    };

    const fetchLocationsData = () => {
      axios.get('http://127.0.0.1:8000/api/locations/')
        .then((response) => {
          setLocationsData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching locations data:', error);
          setLoading(false);
        });
    };

    getUserLocation();
    fetchLocationsData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Location Tracker</h1>
      </header>

      <main className="main">
        {location ? (
          <div className="location-info">
            <h2>Your Location:</h2>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {loading ? (
          <p>Loading locations data...</p>
        ) : locationsData.length > 0 ? (
          <div className="locations-list">
            <h2>Locations List:</h2>
            <table className="locations-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {locationsData.map((location, index) => (
                  <tr key={location.id}>
                    <td>{index + 1}</td>
                    <td>{location.latitude}</td>
                    <td>{location.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No locations data available.</p>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Location Tracker App : Sagore Sarker</p>
      </footer>
    </div>
  );
};

export default App;
