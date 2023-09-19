//dependencies
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

//models
const pokemons = require("./models/pokemon.js");

//adding view templates
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//controllers implemented as routes
//pokemon routes
app.get("/pokemons/", (req, res) => {
  res.render("Index", { pokemons: pokemons });
});

app.get("/pokemons/:indexOfPokemonsArray", (req, res) => {
  res.render("Show", {
    pokemon: pokemons[req.params.indexOfPokemonArray],
  });
});

//listen on port 3000
app.listen(3000, () => {
  console.log("Welcome to the Pokemon App!");
});
