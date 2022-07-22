import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import {useParams} from "react-router-dom";
import styles from "./Home.module.css";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(" ");
    const {id} = useParams();
    const getMovie = async() =>{
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setMovie(json.data.movie);
    } 
    useEffect(() =>{
        getMovie();
    }, []);
    return (
        <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          {movie.map((movie) => (
            <MovieDetail 
            key={movie.id}
            year={movie.year}
            coverImg={movie.large_cover_image}
            title={movie.title}
            rating={movie.rating}
            runtime={movie.runtime}
            summary={movie.summary}
            genres={movie.genres} />
            ))}
          </div>
        )}
      </div>
    );
}

export default Detail;
