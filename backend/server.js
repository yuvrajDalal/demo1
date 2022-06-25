const express = require("express");

const app = express()

const cors = require("cors")
const routerMovie = require("./routes/movie");

app.use(cors("*"));
app.use(express.json());
app.use("/movie", routerMovie);

app.listen(4000,"0.0.0.0",()=>{
    console.log("server started on port 5000")
});