const generateURL = require('../getcode/generateurl');
const URL = require('../model/model');

const shorturl = async(req,res)=>{
    const geturl = req.body.url;
    if(geturl){
        const newcode = generateURL();
        const products = await URL.create({url: req.body.url , code: newcode});
        console.log('we are good with creating new url...');
        res.status(200).json({products});
    }
    else{
        res.status(400).json({msg: "an error has occured"});
    }
}
const geturl = async(req,res)=>{
    const url = await URL.findOne({code:req.params.id});
    if(url){
        console.log('we are good in getting url..');
        res.redirect(url.url);
    }
    else{
        console.log('errrrrrrrrr');
        res.status(404).json({msg:"can't find anything with that id"});
    }
}
const getallurl = async(req,res)=>{
    const url = await URL.find({});
    res.status(200).json({url});
}


module.exports = {shorturl,geturl,getallurl};