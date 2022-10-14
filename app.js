const express = require ("express")
const app = express ()
const PORT = 3000
const thisIsFunction = require ("./routes/routes")
const { getUser,getAddress } = require ("./controller")
app.set("view engine", "ejs");



console.log(thisIsFunction())
console.log(getUser())
console.log(getAddress())

app.listen(3000, ()=> {
    console.log(' Server nyala di port 3000')
})