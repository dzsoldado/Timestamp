const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = process.env.PORT || 1337;


 
const server = http.createServer((req,res)=>{

  
  if(req.url == "/"){
    const date = new Date();
    res.setHeader("200", {'content-type' : "application/json"});
    const json = {unix: date.getTime(), utc: date.toUTCString()};
    res.end(JSON.stringify(json));
  }else if(req.url.slice(1).match(/^\d+$/)){
      const date = new Date(parseInt(req.url.slice(1)));
      res.setHeader("200", {'content-type' : "application/json"});      
      const json = {unix: date.getTime(), utc: date.toUTCString()};
      res.end(JSON.stringify(json));
  }else{
    const date = new Date(req.url.slice(1));
    if (date != "Invalid Date"){
      res.setHeader("200", {'content-type' : "application/json"});      
      const json = {unix: date.getTime(), utc: date.toUTCString()};
      res.end(JSON.stringify(json));
    }else{
      const json = {"error" : "Invalid Date" };
      res.setHeader("200", {'content-type' : "application/json"});
      res.end(JSON.stringify(json));
    }
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
