// When a user goes to the /drinks route, they should see an index of all the drinks available at the pub
// Index: The name of each drink should be rendered to the page, each name should be clickable
// When a user clicks on the name of one of the drinks, they should be taken to that drink's show page
// Show: The name, image, and price of each drink should be rendered to the page


const express = require("express") 
const app = express()
const PORT = (2500)
const drinks = require('./models/drinks.js')


// console.log(app) // check one 2....

app.get('/drinks', (req,res) => {
    res.render('index.ejs', {drinks: drinks, capitalizeFirstLetter: capitalizeFirstLetter})
})

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)}


app.listen(PORT, () => {
    console.log("The end is nearrrrrr, buy moarrrrr!")
})

