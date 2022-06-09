const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()




//mid deal ware
app.use(cors());
app.use(express.json());


//add mongo db 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ydklm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });



async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db("cleanCo").collections("service")
        console.log('mongo db connected')
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


// how to send hello message 
app.get('/', async (req, res) => {
    res.send('Hello World')
})

// listing this port 
app.listen(port, () => {
    console.log(`I am running ${port}`)
})