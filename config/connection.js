const mongoClient = require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done) {
    const url = "mongodb+srv://shinu:shinu01997@crud.usdgu.mongodb.net/usermanagement?retryWrites=true&w=majority"
    const dbname='usermanagement'

    mongoClient.connect(url,{useUnifiedTopology:true},(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })  
 
}   

module.exports.get=function() {
    return state.db
}
