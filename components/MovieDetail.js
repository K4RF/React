import PropTypes from "prop-types";

function MovieDetail({ coverImg, title, year, summary, genres, rating, runtime}) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <div>
        <h2>{title}</h2>
        <h3>{rating}</h3>
        <h3>{runtime}</h3>
        <h3>{year}</h3>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
    );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default MovieDetail;
