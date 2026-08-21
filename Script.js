// Initialize the map and set the initial view to Kolkata
var map = L.map('map').setView([22.5726, 88.3639], 13);

// Use OpenStreetMap for the map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a sample shop marker
L.marker([22.5726, 88.3639]).addTo(map)
  .bindPopup('<b>Sample Shop</b><br>Delicious food and drinks!');
