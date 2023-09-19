//require React
const React = require("react");

//declare styles variable
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>
                  {pokemon.name.charAt(0).toUpperCase()}
                  {pokemon.name.slice(1)}
                </a>
                ;
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
