const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors'); // Import cors package
const app = express();
const PORT = 3000;

// File paths
const projectsFilePath = path.join(__dirname, 'projects.txt');
const userFilePath = path.join(__dirname, 'user.txt');

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
app.use(cors()); // Enable CORS for all routes

// Endpoint to read project data
app.get('/projects', async(req, res) => {
    try {
        const data = await fs.readFile(projectsFilePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error('Error reading projects data:', err);
        res.status(500).send('Failed to read project data');
    }
});

// Endpoint to write project data
app.post('/projects', async(req, res) => {
    const projects = req.body;
    try {
        await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2));
        res.status(200).send('Data saved');
    } catch (err) {
        console.error('Error saving data to file:', err);
        res.status(500).send('Failed to save data');
    }
});

// Endpoint to register a new user
app.post('/register', async(req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('Please provide name,email, and password');
    }

    try {
        let users = [];
        if (await fs.pathExists(userFilePath)) {
            const data = await fs.readFile(userFilePath, 'utf8');
            users = JSON.parse(data);
        }

        const newUser = { name, email, password };
        users.push(newUser);

        await fs.writeFile(userFilePath, JSON.stringify(users, null, 2));
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error saving user data:', err);
        res.status(500).send('Failed to register user');
    }
});

// Endpoint to login a user
app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Please provide email and password');
    }

    try {
        if (await fs.pathExists(userFilePath)) {
            const data = await fs.readFile(userFilePath, 'utf8');
            const users = JSON.parse(data);

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                res.status(200).send({ message: 'Login successful', name: user.name });
            } else {
                res.status(401).send('Invalid emailor password');
            }
        } else {
            res.status(404).send('User data not found');
        }
    } catch (err) {
        console.error('Error reading user data:', err);
        res.status(500).send('Failed to login');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});