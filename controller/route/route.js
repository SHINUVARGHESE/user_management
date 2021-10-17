const express = require('express');
const route = express.Router();
const userHelpers = require('../../helpers/userHelpers')

route.post('/addUser',(req,res)=>{
    userHelpers.insertion(req.body,(result)=>{
        if(result){
            console.log('item inserted');
        }
    })
})

route.get('/allUsers',(req,res)=>{
    userHelpers.findAll((result)=>{
        res.send(result)
    })
})

route.post('/removeUser',(req,res)=>{
    userHelpers.removeUser(req.body.id,(result)=>{
       if(result){
           console.log('user removed');
       }
    })
})

route.post('/editUser',(req,res)=>{
    userHelpers.editUser(req.body,(result)=>{
      if (result) {
          console.log('updated');
      }
    })
})

route.get('/searchUser',(req,res)=>{
    userHelpers.searchUser(req.query.userName,(result)=>{
        res.send(result)
    })
})
  
module.exports = route; 