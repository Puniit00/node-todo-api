const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    return 'can not connect to the server'
}
console.log('Connection to the server successful');

const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//     text : 'Something to do',
//     completed : false
// },(err,result)=>{
//     if(err){
//         console.log('Unalbe to make todo',err)
//     }
//     else{
//         console.log(JSON.stringify(result.ops),undefined,2);
//     }
// })

db.collection('User').insertOne({
    Name : 'Puneet',
    Age : 21,
    Location : 'New Delhi'
},(err,result)=>{
    if(err){
        console.log('Unalbe to make todo',err)
    }
    else{
        console.log(JSON.stringify(result.ops),undefined,2);
    }
})

client.close();
})
