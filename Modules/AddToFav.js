const Users=require('./DataBaseSchema');
function AddToFav(req,res){
    
    
    const {name,instructions,photo,email}=req.body;



    Users.find({email:email},(err,data)=>{
        if(err){
            res.send('error');
        }
        else{
            data[0].Chars.push({
                name:name,
                instructions:instructions,
                photo:photo
            });
            data[0].save();
            res.send(data[0].Chars);
            console.log(data)
        }
    })
}

module.exports=AddToFav;