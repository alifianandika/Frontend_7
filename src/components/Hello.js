/**
 * Membuat component react Hello
 *  Harus Huruf kapital = Hello =
 */

/**
 * 
 * @param  props yang terbentuk hapus const yah dan ubah pros ke {} yah  
 * @returns 
 */

 function Hello(props){
    console.log(props);

    //melakukan destructing props
    // const {name} = props; 

    // diluar return JS
    // const nama = "Andika Alifian";
    // const major = "Informatics";

    // dalam return JSX
    return(
        <div className = "hello">
            <h6>Movie Database</h6>
            {/* <p>Saya {props.name}</p> */}

            {/* <p>Saya {name}</p> */}
           


        </div>
        
    );
}

export default Hello;
