const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, emial){
    this.name = name;
    this.username = username;
  }

  save(){
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId){
    const db = getDb();
    return db.collection('users').find({_id: new ObjectId(userId) }).next();
  }

}

module.exports = User;
