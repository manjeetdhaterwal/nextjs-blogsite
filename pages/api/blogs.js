// const fs = require('fs');
import * as fs from 'fs';

export  default async function handler(req, res) {
    let dir = await fs.promises.readdir('blogdata');
    // for infinity scroll
    // dir = dir.splice(0, parseInt(req.query.count)) 
    let allblogs= [];
    // for(var i=0; i<dir.length; i++)
    // {
    //     const file = await fs.promises.readFile(`blogdata/${dir[i]}`);
    //     allblogs.push(JSON.parse(file));
        
    // }
    for(var i=0; i<dir.length; i++)
    {
        const file = await fs.promises.readFile(`blogdata/${dir[i]}`);
        allblogs.push(JSON.parse(file));
        
    }
    res.status(200).json(allblogs)
  }
  