const fs = require('fs'); //file system

fs.readFile('arquivo.txt', 'UTF8',(err, data) => {
    if(err) {
        console.log(err);
        return
    }else {
        console.log(data);
    }
});