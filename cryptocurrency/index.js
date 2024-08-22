import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  let toLower=req.query.cryptos.toLowerCase();
  const cryptos = toLower ? toLower.split(',') : ['bitcoin', 'ethereum'];
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd`);
    const prices = cryptos.map(crypto => ({
      name: crypto,
      price: response.data[crypto]?.usd || 'Invalid cryptocurrency',
    }));
    res.render('index', { prices });
  } catch (error) {
    res.status(500).send('Error fetching prices');
  }
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
