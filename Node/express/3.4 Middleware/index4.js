import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit" , (req, res) => {
  const streetName = req.body.street;
  const petName = req.body.pet;
  // console.log(req.body);
  res.send(`<h1> Your band name is:</h1><h2>A${streetName}${petName}❤️ </h2>`);
  // res.send(`<h2> A${streetName}${petName} </h2> `)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
