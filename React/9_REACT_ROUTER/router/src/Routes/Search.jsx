import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const url = "http://localhost:3001/products?" + searchParams;
  

  const { data: items} = useFetch(url);
  
  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <ul className="products">
       {items&&
       items.map((item) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </li>
       ))}
      </ul>
    </div>
  );
};

export default Search;