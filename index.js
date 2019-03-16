const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 1337;

const server = http.createServer((req,res)=>{
  console.log(new Date());
});



server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
