import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const apiKey = 'fb7742c31f1d4fe32d6bfcbb50bd9b6a-us13';
const listId = '5b391a5fad';
const serverPrefix = apiKey.split('-')[1];
const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/submit', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.render('error.ejs', { message: 'Email is required' });
  }


  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const options = {
    headers: {
      'Authorization': `apikey ${apiKey}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(url, data, options);
    res.render('success.ejs', { message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Mailchimp Error:', error.response ? error.response.data : error.message);

    const errorMessage = error.response?.data?.detail || 'Error subscribing, please try again.';
    res.render('error.ejs', { message: errorMessage });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
