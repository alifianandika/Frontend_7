import { useState } from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data from "../utills/contans/data";
import { nanoid } from "nanoid";


function Movies(props){
     //props ini adalah lifting state home->movies->form
    const {movies, setMovies} = props;
    

    // const movies = data;


    // const [movies, setMovies] = useState(data);

   

    function tambahFilm(){
        // console.log("tambah fim");

        const movie = {
            id : nanoid(),
            title : "Option",
            year : "2000",
            type : "movie",
            poster : "https://picsum.photos/300/400",
        };


        // movies.push(movie);
        // console.log(movies);


        //menambahkan movie ke state movies
        //spread operators : copas dan merge array
        setMovies([...movies, movie]);
    }

    return(


        <div className={styles.container}>
           <section className={styles.movies}>
                <h2 className={styles.movies__title}>Rekomendasi Movie</h2>

                <div className={styles.movie__container}>
                    {/* <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Layangan Putus</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Makmum</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Anabela</h3>
                        <p className={styles.movie__date}>2010</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Adit Sopo Jarwo Series</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Lutung Sarung</h3>
                        <p className={styles.movie__date}>2005</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Aku Kamu Dia</h3>
                        <p className={styles.movie__date}>2015</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Kisah Cinta Bertasbih 2</h3>
                        <p className={styles.movie__date}>2017</p>
                    </div>

                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Jagoan Neon</h3>
                        <p className={styles.movie__date}>2019</p>
                    </div> */}


                 {/* <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie />
                 <Movie /> */}

                 {/* looping data movies : map, 
                 render components movie
                 kirim props movie */}

                 {
                     movies.map(function(movie){
                         return <Movie key={movie.id} movie={movie} />
                     })
                 }

                </div>

                <button onClick={tambahFilm}>Add + Movie</button>
           </section>
        </div>
    )
}

export default Movies;