const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const session = require('express-session');

var userprofile;
const url = "mongodb+srv://deepender:uOlL3H1qGiKYXVZo@cluster0.kyzfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 3000;
let app = express();
app.use(cors());
let db;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



app.use(session({
    secret:'mysessionid'
}))

var mongoClient = new mongodb.MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true})
mongoClient.connect((err) => {
    if(err) throw err;
    db = mongoClient.db('myFirstDatabase');
});

app.get('/health',(req,res)=>{
    res.send("Health Ok")
});


app.get('/food',(req,res) => {
    db.collection('food').find().toArray((err,postdata) => {
        if(err) throw err;
        else{
            res.send(postdata)
        }
        
    })
});
app.get('/sports',(req,res) => {
    db.collection('sportsData').find().toArray((err,postdata) => {
        if(err) throw err;
        else{
            res.send(postdata)
        }
        
    })
});
app.get('/travel',(req,res) => {
    db.collection('travelData').find().toArray((err,postdata) => {
        if(err) throw err;
        else{
            res.send(postdata)
        }
        
    })
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`App is running on port ${port}`)
})
