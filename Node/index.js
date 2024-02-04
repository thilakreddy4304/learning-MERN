const { log } = require("console");
const fs = require("fs");

// fs.writeFile("msg.txt", "Hello", (error) => {
//     if(error) throw error;
//     log("file saved");
// });

fs.readFile("msg.txt", "utf-8", (error, data) =>{
    if(error) throw error;
    log(data)
})