const mongo= require('mongoose');

const mongo_url='mongodb://localhost:27017/exdb';

exports.connect =()=>{
    
    mongo.connect(mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('database connected sucessfully');
    })
    .catch((error)=>{
        console.error('database not connected'+error);
    })
}