const Users=require('./DataBaseSchema');
function updateFav(req,res){
    const index=req.params.index;
    const {name,instructions,photo,email}=req.body;
    Users.findOne({email:email},(err,data)=>{
        if(err){
            res.send('error');
        }
        else{
            data.Chars.splice(index,1,{
                name:name,
                instructions:instructions,
                 photo:photo
            })

            data.save()
            res.send(data)
        }
    })
}

module.exports=updateFav;