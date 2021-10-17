const db = require('../config/connection')
const collection = require('../config/collection');
var objectId = require("mongodb").ObjectID;
module.exports = {
  insertion: (data, callback) => {
    return new Promise((resolve, reject) => {
      db.get().collection(collection.user_collection).insertOne(data)
        .then((result) => {
          callback(result);
        });
    })
  },

  findAll: async (callback) => {
    const users = await db.get().collection(collection.user_collection).find().toArray();
    callback(users)

  },

  removeUser: async (id, callback) => {
    var response = await db
      .get()
      .collection(collection.user_collection)
      .deleteOne({ _id: objectId(id) });
      callback(response);

  },

  editUser:async(body,callback)=>{
    var response = await db
    .get()
    .collection(collection.user_collection)
    .updateOne(
      { _id:objectId(body.userid) },
      {
        $set: {
          name:body.name,
          mail:body.mail,
          phonenumber:body.phonenumber
        },
      }
    );
  callback(response);
  },

  searchUser:async(userName,callback)=>{
    var data = await db 
    .get()
    .collection(collection.user_collection)
    .findOne({ name: userName });
    callback(data);
  }
}