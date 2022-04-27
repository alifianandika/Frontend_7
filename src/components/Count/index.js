import { useEffect, useState } from "react";

function Count(){
    //var angka
    
    const [angka, setAngka] = useState(0);
    

    function addAngka(){
        // angka = angka + 1;

        setAngka(angka + 1);
        console.log(angka);
    }


    
    //useeffect update DOM
    function updateDOM(){
        console.log("Lifecyle : Dimount");


        //melakukan side effect : akses DOM
        document.title = `Hasil : ${angka}`;
    }

    useEffect(updateDOM, [angka]);





    //USE EFFECT
    // useEffect(function() {
    //     // console.log("Lifecyle : Dimount");


    //     // //melakukan side effect : akses DOM
    //     // document.title = `Hasil : ${angka}`;
    // }, [angka]);

    // console.log("Lifecyle : Dirender");




    return(
        <div>
            <p>Hasil : {angka} Buah</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Count;