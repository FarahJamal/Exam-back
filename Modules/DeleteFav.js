const Users=require('./DataBaseSchema');
function DeleteFav(req,res){
    const {email}=req.qurey;
    const id=req.params.index;
    Users.findOne({email:email},function(err,data){
        if(err){
            res.send('error');
        }
        else{
         data.Chars.splice(id,0);
         data.save();
         res.send(data);
        }
    })
}

module.exports=DeleteFav;