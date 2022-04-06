import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Movies from "../Movies/Movies";
import styles from "./Form.module.css";

function Form(props){
    
    const {movies, setMovies} = props;

    //buat state title

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [select, setSelect] = useState("");

    //state buat pesan error

    //rendering error
    const [isTitleError, setIsTitleError] = useState("");
    const [isDateError, setIsDateError] = useState("");
    const [isLinkError, setIsLinkError] = useState("");
    const [isSelectError, setIsSelectError] = useState("");


    //buat fungis hadleTitle

    /**
     * 
     * @param {*} e
     * 
     * input yang dimasukan akan disimpan pada fungsi handle setelah itu masuk ke const setTitle
     *  
     */
    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handleLink(e){
        setLink(e.target.value);
    }

    function handleSelect(e){
        setSelect(e.target.value);
    }

    function handleSubmit(e){
        //cegah form agar tidak direfresh
        e.preventDefault();

        // console.log("form submit");

        //handle validasi rendering
        if(title === ""){
            setIsTitleError(true);
        }
        // jika date kosong, set eror jadi true
        else if(date === ""){
            setIsDateError(true);
        }
        else if (link === ""){
            setIsLinkError(true);
        }
        else if (select === ""){
            setIsSelectError(true);
        }

        //jika tidak, tambah data
        else{
            const movie = {
                id : nanoid(),
                title: title,
                year: date,
                link : link,
                select : select,
                type: "Movie",
                poster: "https://picsum.photos/300/400",
            };
    
            // console.log(movie);
    
            setMovies([...movies, movie]);


            //cara untuk menghilangkan notif jika sukses
            setIsTitleError(false);
            setIsDateError(false);
            setIsLinkError(false);
            setIsSelectError(false);
        }

        


        
    }


    return(
        <div className={styles.container}>
            <section className={styles.Form}>
                <div className={styles.Form__left}>
                    {/* <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre : Drama, Romance</h3>
                    <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod culpa amet obcaecati perferendis explicabo inventore voluptatem saepe eos libero!</p>
                    <button className={styles.hero__button}>Watch</button> */}

                    <img className={styles.Form__image} src="https://picsum.photos/300/400"  />
                </div>

                

                <div className={styles.Form__right}>
                    <h1 className={styles.Form__title}>Add Movie</h1>
                    <form  className={styles.Form__add} onSubmit={handleSubmit} >
                        
                        <div className={styles.Form__control}>
                            <p htmlFor="title">Title</p>
                            <input className={styles.Form__inputone} type="text" 
                            value={title} 
                            onChange={handleTitle}
                            
                            />

                            {/* { isTitleError ?  <p>* Title Wajin Diisi</p> : ""} */}

                            {/* { isTitleError &&  <p>* Title Wajin Diisi</p>} */}
                           

                            { isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        
                        <div className={styles.Form__control}>
                            <p>Year</p>
                            <input className={styles.Form__inputtwo} type="date" 
                            value={date}   
                            onChange={handleDate}
                            
                            />

                            {/* { isDateError ? <p>* Date Wajin Diisi</p> : ""} */}

                            {/* bisa pakai ini juga yah, operator dan dan */}
                            {/* { isDateError && <p>* Date Wajin Diisi</p> } */}

                            {/* simpan ke alert file  dengan metode cointamen */}

                            {isDateError && <Alert>Date Wajib Diisi</Alert>}

                            
                        </div>


                        <div className={styles.Form__control}>
                            <p>Link Gambar</p>
                            <input className={styles.Form__inputhree} type="text" 
                            value={link}   
                            onChange={handleLink}
                            
                            />

                            {/* { isDateError ? <p>* Date Wajin Diisi</p> : ""} */}

                            {/* bisa pakai ini juga yah, operator dan dan */}
                            {/* { isDateError && <p>* Date Wajin Diisi</p> } */}

                            {/* simpan ke alert file  dengan metode cointamen */}

                            {isLinkError && <Alert>Link Wajib Diisi</Alert>}

                            
                        </div>

                        <div className={styles.Form__control}>
                            <p>Select Movie</p>
                            <select name="select" id="" onChange={handleSelect} value={select}>
                                <option value=""></option>
                                <option value="Horor">Horor</option>
                                <option value="Romance">Romance</option>
                                <option value="Survival">Survival</option>
                            </select>

                            {/* { isDateError ? <p>* Date Wajin Diisi</p> : ""} */}

                            {/* bisa pakai ini juga yah, operator dan dan */}
                            {/* { isDateError && <p>* Date Wajin Diisi</p> } */}

                            {/* simpan ke alert file  dengan metode cointamen */}

                            {isSelectError && <Alert>Select Wajib Diisi</Alert>}

                            
                        </div>

                        
                        
                        <button className={styles.Form__button} >Submit</button>
                    </form>
                </div>
            </section>
        </div>


    )
}

export default Form;


