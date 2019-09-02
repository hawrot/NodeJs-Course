const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb+srv://matt:A6WfFNLQgzPAn4Ej@cluster0-inhjh.mongodb.net/test?retryWrites=true&w=majority')
    .then(result =>{
        console.log('Connected!');
    })
    .catch(err =>{
        console.log(err);
    });