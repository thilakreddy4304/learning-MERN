import express from "express"
import ejs from "ejs"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();
    // const day = 4
    let type = "weekday";
    let adv = "time to work hard"

    if (day === 0 || day === 6){
        type = "Weekend"
        adv = "time to relax"
    }
    res.render("index.ejs", 
    {
        dayType : type, 
        advice : adv,
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})