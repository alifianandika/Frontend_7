import styles from "./Movie.module.css";

function Movie(props){

    // console.log(props.movie);

    const { movie } = props;
    return(
        <div className={styles.movie}>
            <img className={styles.movie__image} src={movie.poster} alt={movie.title} />

            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
            <a href="" className={styles.movie__link}>{movie.link}</a>
            <p className={styles.movie__select}>{movie.select}</p>
        </div>
    )
}

export default Movie;