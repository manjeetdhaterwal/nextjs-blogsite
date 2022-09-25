import fs from 'fs';
const {parse, stringify} = require('flatted');

export default async function handler(req, res) {
    if(req.method === 'POST')
    {
        const data =  fs.readdirSync('contactdata');
        console.log(data.length);
        fs.writeFileSync(`contactdata/${data.length+1}.json`, JSON.stringify(req.body));
        res.status(200).json(req)
    }
    else{
        res.status(200).json({ name: 'John Doe' })
    }

    
  } 
  