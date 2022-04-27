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

  

    // const {title, date, link, select} = formData;

    // //membuat objek
    // const [formData, setFormData] = useState({
    //     title: "",
    //     date: "",
    //     link: "",
    //     select: "",

    // });


    //state membentuk setFormData

    //fungsi handleChange
    // function handleChange(e){
    //    const { name, value } = e.target;

    //   setFormData({
    //       ...formData,
    //       [name] : value,
    //   });
    // }


    //state buat pesan error
     //rendering error
     const [isTitleError, setIsTitleError] = useState("");
     const [isDateError, setIsDateError] = useState("");
     const [isLinkError, setIsLinkError] = useState("");
     const [isSelectError, setIsSelectError] = useState("");

    // const {isTitleError, isDateError, isLinkError, isSelectError} = props;



    /**
     * to do tugas #8
     * buat handle error
     */
    const [Notif, NotifErr]  = useState({
        //memberi objek yang berisi boolean 
        isTitleError: (false),
        isDateError: (false),
        isLinkError: (false),
        isSelectError: (false),

    })
     
    //handle eror tugas 
    /**
     * 
     * @returns 
     * pembagian usestate Notif & NotifErr
     */
    function handleErr(){
        if(title === ""){
                NotifErr({
                    ...Notif,
                    setIsTitleError : (true),
                });
                    return false;

                }
                // jika date kosong, set eror jadi true
                else if(date === ""){
                    NotifErr({
                        ...Notif,
                        setIsDateError : (true),
                });
                    return false;
                }
                else if (link === ""){
                    NotifErr({
                        ...Notif,
                        setIsLinkError : (true),
                });
                    return false;
                }
                else if (select === ""){
                    NotifErr({
                        ...Notif,
                        setIsSelectError : (true),
                });
                    return false;
                }
                else {
                    NotifErr({
                        //tetap beri boolean dan useStatenya
                        ...Notif,
                        setIsTitleError: (false),
                        setIsDateError: (false),
                        setIsLinkError: (false),
                        setIsSelectError: (false),
                       
                });
                   
                    return true;
                }
    }














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

        // validasi() && addMovie();

        // console.log("form submit");

        //handle validasi rendering
        if(title === ""){
            setIsTitleError(true);
            // setIsDateError(false);
        }
        // jika date kosong, set eror jadi true
        else if(date === ""){
            setIsDateError(true);
            // setIsLinkError(false);
            // setIsLinkError(true);
        }
        else if (link === ""){
            setIsLinkError(true);
            // setIsSelectError(false);
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

        // function validasi(){
        //     if(title === ""){
        //         setIsTitleError(true);
        //         return false;
        //     }
        //     // jika date kosong, set eror jadi true
        //     else if(date === ""){
        //         setIsDateError(true);
        //         return false;
        //     }
        //     else if (link === ""){
        //         setIsLinkError(true);
        //         return false;
        //     }
        //     else if (select === ""){
        //         setIsSelectError(true);
        //         return false;
        //     }
        //     else {
        //         setIsTitleError(false);
        //         setIsDateError(false);
        //         setIsLinkError(false);
        //         setIsSelectError(false);
                    // setIsLinkError(false);
        //         return true;
        //     }
        // }


        // function addMovie(){
        //     const movie = {
        //         id : nanoid(),
        //         title: title,
        //         year: date,
        //         link : link,
        //         select : select,
        //         type: "Movie",
        //         poster: "https://picsum.photos/300/400",
        //     };
    
        //     // console.log(movie);
    
        //     setMovies([...movies, movie]);


        // }


        
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
                            value={title} name="title" id="title"
                            // onChange={handleTitle}
                            // onChange={handleChange}

                            onChange={handleErr}
                            />

                            {/* { isTitleError ?  <p>* Title Wajin Diisi</p> : ""} */}

                            {/* { isTitleError &&  <p>* Title Wajin Diisi</p>} */}
                           

                            { isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        
                        <div className={styles.Form__control}>
                            <p>Year</p>
                            <input className={styles.Form__inputtwo} type="date" 
                            value={date}   name="date" id="date"
                            // onChange={handleDate}
                            // onChange={handleChange}

                            onChange={handleErr}
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
                            value={link}   name="link" id="link"
                            // onChange={handleLink}
                            // onChange={handleChange}

                            onChange={handleErr}
                            />

                            {/* { isDateError ? <p>* Date Wajin Diisi</p> : ""} */}

                            {/* bisa pakai ini juga yah, operator dan dan */}
                            {/* { isDateError && <p>* Date Wajin Diisi</p> } */}

                            {/* simpan ke alert file  dengan metode cointamen */}

                            {isLinkError && <Alert>Link Wajib Diisi</Alert>}

                            
                        </div>

                        <div className={styles.Form__control}>
                            <p>Select Movie</p>
                            <select name="select"  
                            // onChange={handleSelect} 
                            //  onChange={handleChange} 

                            onChange={handleErr}
                             value={select}  id="select">
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


