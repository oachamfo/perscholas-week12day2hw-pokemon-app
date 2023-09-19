//require dependencies
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

//models
const pokemon = require("./models/pokemon.js");

//adding view templates
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//middleware
app.use(express.urlencoded({ extended: false }));

//controllers implemented as routes
//routes: INDUCES

//Homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//Index route
app.get("/pokemon/", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

//New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Delete - place delete route down below

//Update - place update route down below

//Create
app.post("/pokemon", (req, res) => {
  if (req.body.name == "") {
    //if name field is left blank do nothing
  } else {
    req.body.img =
      "https://img.pokemondb.net/artwork/" + req.body.name.toLowerCase();
    console.log(req.body);
    pokemon.push(req.body);
  }
  //res.send("data received"); //to send message to the browser
  res.redirect("/pokemon/");
});

//Show route
//dynamic anchor tags added in Index.jsx
app.get("/pokemon/:indexOfPokemonArray", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.indexOfPokemonArray],
  });
});

//listen on port 3000
app.listen(3000, () => {
  console.log("Welcome to the Pokemon App!");
});
