import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 5000;
const API_URL = "https://secrets-api.appbrewery.com";
const bearerToken = "12fd30ec-0b0d-4f35-8983-c0bcf3512c58";

const config = {
    headers: { Authorization: `Bearer ${bearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', { content: "waiting for data ..." });
});

app.post("/get-secret", async (req, res) => {
    const searchID = req.body.id; 
    try {
        const result = await axios.get(API_URL + "/secrets/" + searchID, config);
        res.render('index.ejs', { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render('index.ejs', { content: JSON.stringify(error.response.data) });
    }
});

app.post('/post-secret', async (req, res) => {
    try {
        const result = await axios.post(API_URL +'/secrets', req.body, config);
        res.render('index.ejs', { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render('index.ejs', { content: JSON.stringify(error.response.data) });
    }
});

app.post('/put-secret', async (req, res) => {
    const searchID = req.body.id;
    try {
        const result = await axios.put(`${API_URL}/secrets/${searchID}`, req.body, config);
        res.render('index.ejs', { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render('index.ejs', { content: JSON.stringify(error.response.data) });
    }
});

app.post('/patch-secret', async (req, res) => {
    const searchID = req.body.id;
    try {
        const result = await axios.patch(`${API_URL}/secrets/${searchID}`, req.body, config);
        res.render('index.ejs', { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render('index.ejs', { content: JSON.stringify(error.response.data) });
    }
});

app.post('/delete-secret', async (req, res) => {
    const searchID = req.body.id;
    try {
        const result = await axios.delete(`${API_URL}/secrets/${searchID}`, config);
        res.render('index.ejs', { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render('index.ejs', { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
