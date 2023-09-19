//require dependencies
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

//models
const pokemon = require("./models/pokemon.js");

//adding view templates
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//controllers implemented as routes
//pokemon routes

app.get("/pokemon/", (req, res) => {
  console.log(pokemon);

  res.render("Index", { pokemons: pokemon });
});

//listen on port 3000
app.listen(3000, () => {
  console.log("Welcome to the Pokemon App!");
});
