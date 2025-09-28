require('dotenv').config();
const express = require('express');
const cors = require('cors');
const employeesRoutes = require('./routes/employees');
const worktimeRoutes = require('./routes/worktime');
const planningRoutes = require('./routes/planning.js'); // Add this line

const app = express();

// ✅ MIDDLEWARE ORDER MATTERS - express.json() BEFORE routes
app.use(cors());
app.use(express.json()); // ✅ This must come before your routes

// Test route
app.get('/', (req, res) => {
  res.send('✅ Express is working!');
});

// Routes
app.use('/employees', employeesRoutes);
app.use('/worktime', worktimeRoutes);

app.use('/api', planningRoutes); // Add this line - IMPORTANT!



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});