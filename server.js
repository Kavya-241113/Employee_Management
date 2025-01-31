const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS for all domains (or specify a specific domain if needed)
app.use(cors()); // Allows all origins, for production, you may restrict this to specific origins

// Your API routes
app.get('/employees', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
