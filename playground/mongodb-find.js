const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    return 'can not connect to the server'
}
console.log('Connection to the server successful');

const db = client.db('TodoApp')

db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    console.log('Todos :-');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('Not abele to find todos',err)
})

client.close();
})
