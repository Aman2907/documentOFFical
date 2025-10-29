import { useEffect, useState } from "react";

export default function Typeahead() {
  const [query, setquery] = useState("");
  const [result, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`
      );
      const data = await res.json();
      console.log(data);
      setResults(data.products);
    };
    const TimerId = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(TimerId);
    };
  }, [query]);

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Enter"
          onChange={(e) => setquery(e.target.value)}
        />
        <ul>
          {result.map((product) => {
            return <li key={product.id}>{product.title} </li>;
          })}
        </ul>
      </div>
    </>
  );
}
