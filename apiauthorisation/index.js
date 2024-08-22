import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express();
const port=8000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
const apiUrl= 'https://secrets-api.appbrewery.com';


const username = 'joseph';
const password = 'joejoe0';  
const apiKey= '2120384f-bae7-46b0-86a5-d4678765c2f4';
const bearerToken= '12fd30ec-0b0d-4f35-8983-c0bcf3512c58';

app.get('/',  (req,res)=>{
    res.render('index.ejs', {content: 'API response'})
});

app.get('/noAuth', async (req,res)=>{
    try{
        const result= await axios.get(apiUrl + '/random');
        res.render('index.ejs', {content : JSON.stringify(result.data)})
    }catch (error){
        res.status(404).send(error.massage);
    }
})

app.get('/basicAuth',async(req,res)=>{
    try{
        const result=await axios.get(apiUrl + '/all?page=2',{
            auth:{
                username: username,
                password: password,
            },
        });
        res.render('index.ejs', {content : JSON.stringify(result.data)})
    }catch(error){
        res.status(404).send(error.massage)
    }
});

app.get('/apiKey', async (req,res)=> {
    try{
        const result = await axios.get(apiUrl + "/filter", {
            params: {
                score: 3,
                apiKey: apiKey,
            },
        });
        res.render("index.ejs", {content: JSON.stringify(result.data)});
    }catch(error){
        res.status(404).send(error.massage);
    }
});

const config={
    headers: { Authorization : `bearer ${bearerToken}`}
}

app.get('/bearerToken', async(req,res)=>{
    try{
        const result= await axios.get(apiUrl + '/secrets/2', config);
        res.render('index.ejs', {content: JSON.stringify(result.data)});
    }catch(error){
        res.status(404).send(error.massage);
    }
});


app.listen(port,()=>{
    console.log(`server runninng at ${port}`)
});