require('dotenv').config();
const express = require('express');
const connectDB = require('./mongodb/connect');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', imageRoutes);

app.get('/', (req, res) => {
    res.send('Express server connected to MongoDB with routes and controllers!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
