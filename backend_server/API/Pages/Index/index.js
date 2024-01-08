import express from 'express'
import bodyParser from 'body-parser'
import User from '../../../Models/users.js'
import session from 'express-session'


const jsonParser=bodyParser.jsonParser

const router=express.Router({ mergeParams: true })
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/',(req,res)=>{
    res.json({"message":'Index API'})
})

router.post('/get_users', async (req,res)=>{
    //console.log(req.params,req.body,req.query)
    var data=req.body
    //Get all the users data
    var result = await User.find()
    if(result.length){
        res.json({status:'success',message:'total users:'+String(result.length),"data":result})

    }else{
        // Insert data to the database
        res.json({status:'error',message:'No users in the database'})
    }
})






export default router