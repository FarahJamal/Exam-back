'use strict'

const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://exam:exam@cluster0.rpjcy.mongodb.net/exam?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

const db=mongoose.connection;
const MyFavFlower=new mongoose.Schema({
    name:String,
    instructions:String,
    photo:String
})
const userSchema=new mongoose.Schema({
    email:String,
    Chars:[MyFavFlower]
});
const Users =mongoose.model('users',userSchema);
function seeds(){
    const user1=new Users({
        email:'farahsarese@gmail.com',
        Chars:[]
    })
    user1.save();

    const user2=new Users({
        email:'roaa.abualeeqa@gmail.com',
        Chars:[]
    })
    user2.save();

}

seeds();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected')});