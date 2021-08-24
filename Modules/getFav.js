const Users=require('./DataBaseSchema');
function getFav(req,res){
    const {name,instructions,photo,email}=req.body;
    Users.find({email:email},(err,data)=>{
        if(err){
            res.send('error');
        }
        else{
          res.send(data[0].Chars);
        }
    })
}

module.exports=getFav;