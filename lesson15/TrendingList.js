import Movie from "./Movie.js"

export default function TrendingList(props) {
  return (
    <div >
      <div className="trending">
        <h2>Trending Now</h2>
        <div className="movie-list">
            {props.movies.map(function(movie) {
            return <Movie title={movie.title} releaseYear={movie.releaseYear} imageUrl={movie.imageUrl} />
            })}
        </div>
    </div>
  </div>
  );
}
