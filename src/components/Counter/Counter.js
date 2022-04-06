import {useState} from "react";


function Counter(){

   

   //membuat var state
    const [hasil, setHasil] = useState(0);

   function tambah(){
       setHasil(hasil + 1);
    //    console.log(hasil);
   }
    return(
        <div>
            <p>Hasil : {hasil}</p>
            <button onClick={tambah}>Add</button>
        </div>
    );
}


export default Counter;