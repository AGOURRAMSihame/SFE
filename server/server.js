const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

// Configuration CORS
if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
} else {
    app.use(cors({
        credentials: true
    }));
}

// Configuration des fichiers statiques et des routes pour la production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client','dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist' ,'index.html'));
    });
}

// Connexion à la base de données MongoDB
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};
dbConnect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
