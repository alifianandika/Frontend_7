import Container from "../Container";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

import Movies from "../Movies/Movies";
import Navbar from "../Navbar/Navbar";
import data from "../utills/contans/data";

function Layout(props){

   
   
    return(
        <>
            <Navbar />
            <main>
                <Container >{props.children}</Container>
           
            {/* {props.children} */}
            </main>
            {/* <Footer /> */}
        </>        
    )
}


export default Layout;