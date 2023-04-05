const express = require("express");
const app = express();
// const https = require("https");
// const fs = require("fs");
const PORT = 8000;

const rappers = {
    "21 savage" : {
        "age" : 29,
        "birthName" : "Sheyaa Bin Abraham-Joseph",
        "birthLocation" : "London, England"
    },
    "chance the rapper": {
        "age" : 29,
        "birthName" : "Chancellor Bennette",
        "birthLocation" : "Chitwon, Illionois"
    },
    "unknown" : {
        "age" : 0,
        "birthName" : "unknown",
        "birthLocation" : "unknown"
    }
}

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req,res) => {
    const name = req.params.name.toLowerCase();
    res.json(rappers[name].birthName)
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});