export default function Movie(props) {
    return (
      <div>
        <div className="movie">
            <img src={props.imageUrl} alt={props.title} />
            <div className="movie-info">
            <h3>{props.title}</h3>
            <h4>Released in {props.releaseYear}</h4>
            </div>
        </div>
      </div>
    );
  }
  