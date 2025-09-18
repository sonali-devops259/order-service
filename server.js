// server.js (minimal)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

// Example existing route
app.get('/orders', (req, res) => {
  res.json([{ id: 1, item: 'Laptop' }, { id: 2, item: 'Phone' }]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

