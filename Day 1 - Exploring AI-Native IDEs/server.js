const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store items
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET /items endpoint - Return all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items endpoint - Add a new item with validation
app.post('/items', (req, res) => {
  // Validate that name exists in the request body
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Create new item with auto-incremented ID
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
    name: req.body.name
  };

  // Add to items array
  items.push(newItem);

  // Return the created item with 201 status code
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});