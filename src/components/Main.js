import React from "react";
import Hello from "./Hello";


/**
 * 
 * @returns main luasnya + menampung konten isi
 * 
 * didalam component didalam component
 */
 function Main(){

    //mengirim props name ke component Hello

    return(
        <div>
            <main>
            <Hello name="Febi"/>
            <Hello name="Shanum"/>
            <Hello name="Syahnaz"/>
            
            </main>
        </div>
        
    );
}


export default Main;