import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3300;

const API_URL = 'https://secrets-api.appbrewery.com/random';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    let content = '';
    let username = 'Unknown';

    try {
        const result = await axios.get(API_URL);

        if (result.data && result.data.secret) {
            content = result.data.secret;
            username = result.data.username || 'Anonymous'; 
        } else {
            content = 'No secrets available';
        }
    } catch (error) {
        content = 'Error occurred';
        username = 'Error';
    }

    res.render('index', { content, username });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
