

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/AddForm/Form";

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../components/utills/contans/data";
import CreateMovie from "./movie/Create";
import Popular from "./movie/Popular";
import Now from "./movie/Now";
import Top from "./movie/Top";
import Layout from "../components/Layout";
import Count from "../components/Count";

// Component Movie Main Database
function Main(){
    const [movies, setMovies] = useState(data);
   

    return (
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies}/>
            <Form  movies={movies} setMovies={setMovies}/>
            
        
           
        </main>
    )
}



function Home(){

    // const [movies, setMovies] = useState(data);
    return (
        <div>
           <Layout>
           <Routes>
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/pages/movie/create" element={<CreateMovie />} />
                <Route path="/pages/movie/popular" element={<Popular /> } />
                <Route path="/pages/movie/now" element={<Now /> } />
                <Route path="/pages/movie/top" element={<Top /> } />
               
           </Routes>  
           </Layout>
            
            
            <Navbar/> 
             <Main /> 
             <Footer />

           

            {/* <Hero />
            <Movies movies={movies} setMovies={setMovies}/>
            <Form  movies={movies} setMovies={setMovies}/> */}
        
        </div>
    )
}






export default Home;