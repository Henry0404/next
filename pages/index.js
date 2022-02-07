import Link from "next/link";
const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();

  return (
    <li>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  console.log(pokemones);
  return (
    <div>
      <p>pokemones</p>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}

//getStaticProps permite indicarle a next, que la pagina se va a generar de manera estatica, cuando nosotros corramos el comando npm run build
export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return {
    props: { pokemones: data.results },
  };
};
