const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = callback =>{
    MongoClient.connect('mongodb+srv://matt:A6WfFNLQgzPAn4Ej@cluster0-inhjh.mongodb.net/test?retryWrites=true&w=majority')
        .then(client =>{
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch(err =>{
            console.log(err);
            throw err;
        });

};

const getDb = () =>{
    if (_db){
        return _db;
    }
    throw 'No db found';
};


exports.MongoConnect = MongoConnect;
exports.getDb = getDb;



