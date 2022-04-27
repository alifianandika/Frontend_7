import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero(){
    //membuat state movie
    const [movie, setMovie] = useState("");

    //mari kita buat fungsi sendiri yah biar lebih clean
    async function fetchMovie(){
       
        const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
        
        const data = await response.json();
       
        setMovie(data);

      
    }

    //callback
    useEffect(fetchMovie, []);

    console.log(movie);



    // useEffect(async () => {
    //     //melakukan side effect : fetch data movie (api);

    //     //belakang layar menggunakan promise atau bisa ansy await perpaduan ansyc await
    //     const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
    //     // console.log(response);

    //     //harus pakai await agar json bisa dikonversi yah
    //     const data = await response.json();
    //     // console.log(data);
        
    //     //setMovie dengan data pada hasil  fetch 
    //     //alhasil API ny trs diakses dengan metode fetch
    //     //terdapat lifecyle mount use effect dengan interaktif infinte loop

    //     //cara atasi dengan single parray kedua [] agar terjadi infinte loop
    //     setMovie(data);

    //     //kalo ditambah [movie] akan terjadi infinite loop
    
    // }, []);


    // console.log(movie);



    //mari kita akses fetch menjadi statis
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>Genre : {movie.Genre}</h3>
                    <p className={styles.hero__description}>{movie.Plot}</p>
                    <button className={styles.hero__button}>Menonton</button>



                </div>

                

                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src = {movie.Poster} alt = {movie.Title}/>
                    
                </div>
            </section>
        </div>
    )
}


export default Hero;