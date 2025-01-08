import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/search', async (req, res) => {
    const { title, location } = req.query;
    const apiUrl = `https://job-search-api.example.com?title=${title}&location=${location}`; // Replace with actual job search API URL
    const response = await fetch(apiUrl);
    const jobs = await response.json();
    res.json(jobs);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});