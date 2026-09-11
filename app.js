const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const app = express();
const Router = require('./routes/route');

const connectDB = require('./db/connect');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.get('/' ,(req,res)=>{
    res.send('we are good here');
})

app.use(express.json());
app.use(express.text());
app.use('/api/v3/shorts' , Router)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB);
        app.listen(port ,()=>{
            console.log(`server is listening on port ${port}...`);
        })
    }
    catch (err) {
        console.log(err);
    }
}

start();