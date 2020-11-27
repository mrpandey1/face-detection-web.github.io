const Clarifai=require('clarifai')

const app=new Clarifai.App({
    apiKey:'96210a293f454385916ae894c0e20535'
  })



const handleApiCall=(req,res)=>{
    app.models.
    predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{
        console.log(req.body.input)
        res.json(data);
    })
    .catch(err=>res.status(400).json('unable to work with api'));
}

const handleImageCount=(req,res,db)=>{
    const {id} = req.body;
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries=>{
        res.json(entries[0])
    })
    .catch(err=>res.status(400).json('Something went wrong'));
}

module.exports={
    handleImageCount,
    handleApiCall
}