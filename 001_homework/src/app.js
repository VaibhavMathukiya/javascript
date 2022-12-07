const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT;

const viewPath = path.join(__dirname, "../templetes/views")
const partialsPath = path.join(__dirname, "../templetes/partials")
const publicPath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))


app.get("/", (req, resp) => {
    resp.render("home")
})

app.get("/weather", (req, resp) => {
    resp.render("weather")
})




app.listen(PORT, (req, resp) => {
    console.log("server runing on port :" + PORT);
})