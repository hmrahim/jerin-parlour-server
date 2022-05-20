const express  = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.trq2z.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const run = async()=> {
    try {
        client.connect()

        const userCollection = client.db("jerin-parlour").collection("users")
        
    } finally{

    }


}
run().catch(console.dir)




app.get("/",(req,res)=> {
    res.send("hello from home page")
})




app.listen(port,()=> {
    console.log("server running on port 5000");
})