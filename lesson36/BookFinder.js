import { useState, useEffect } from "react";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(filterValue = "") {
    setError(null);

    try {
      //will get query from input and add it to the url for fetch 
      const url=`https://www.googleapis.com/books/v1/volumes?q=${query}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fetch error");
      }
      const data = await response.json();
      console.log(data.items);
      let filteredBooks = data.items;
      if (filterValue !== "") {
        filteredBooks = filteredBooks.filter(function (book) {
          return (
            book.volumeInfo &&
            book.volumeInfo.categories &&
            book.volumeInfo.categories.includes(filterValue)
          );
        });
      }

      setBooks(filteredBooks);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }
  }

  useEffect(
    function () {
      //don't perform query search if it is empty!
      if (query !== "") {
        fetchData();
      }
    },
    [loading],
  );

  //update query value as user types in input 
  function handleInputChange(event) {
    setQuery(event.target.value);
  }
  //allows for page render of results and API call
  function handleSearch(event) {
    setLoading(true);
    fetchData();
  }
  //allows for page render to show filtered results
  function handleFilterChange(event) {
    setLoading(true);
    fetchData(event.target.value);
  }

  return (
    <div>
      <h1>Book Finder</h1>
      <div id="input-fields">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books..."
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
        <br />
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Paid ebooks">Paid E-books</option>
          <option value="free-ebooks">Free E-books</option>
        </select>
      </div>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      <ul>
        {books.map(function (book) {
          return (
            <li key={book.id} className="book">
              {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book-cover"
                  />
                )}
              <div className="book-info">
                <h2>{book.volumeInfo.title}</h2>
                <p>
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "Unknown Author"}
                </p>

                <p>
                  {book.volumeInfo.description
                    ? `${book.volumeInfo.description.substring(0, 100)}...`
                    : "No description available"}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
