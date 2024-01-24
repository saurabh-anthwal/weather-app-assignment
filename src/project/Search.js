import React, { useEffect, useState } from "react";
function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [show, setShow] = useState(false);
  const data = [
    "apple",
    "banana",
    "mango",
    "cow",
    "potato",
    "cat",
    "dog",
    "papaya",
    "tajmahal",
    "delhi",
    "mumbai",
    "dehradun",
    "kolkata",
  ];

  useEffect(() => {
    const filterData = data.filter((el) => {
      return el.includes(inputSearch);
    });
    setSearched(filterData);
  }, [inputSearch]);
  return (
    <div className="App">
      <h1>input</h1>
      <input
        className="border"
        type="text"
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      <div>
        {data.length > searched.length &&
          (searched.length > 0 ? (
            searched.map((el, i) => (
              <div key={i}>
                <p>{el}</p>
              </div>
            ))
          ) : (
            <p>..no item found!</p>
          ))}
      </div>
    </div>
  );
}

export default Search;
