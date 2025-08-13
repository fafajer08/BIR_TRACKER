const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tinRoutes = require('./routes/tinRoutes');

const app = express();

const connectDB = require('./config/db');
connectDB();

// Configure CORS to allow your frontend origin
const corsOptions = {
  origin: 'https://bir-tracker-qy3h.vercel.app',  // <-- your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // if you use cookies or authentication headers
  optionsSuccessStatus: 204
};

// Enable preflight across all routes
app.options('*', cors(corsOptions));

// Use CORS with the defined options
app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tins', tinRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
