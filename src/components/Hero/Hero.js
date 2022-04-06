import styles from "./Hero.module.css";

function Hero(){
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Bidadari Bermata Bening</h2>
                    <h3 className={styles.hero__genre}>Genre : Drama, Romance</h3>
                    <p className={styles.hero__description}>Aina adalah salah satu wanita cantik jelita yang mempunyai hati yang baik.Dia pandai segala hal yang sangat mengidolakan Gus Afif sejak Madrasah Aliyah.Bagaimana Ceritanya,Yuk Menonton Movienya ...</p>
                    <button className={styles.hero__button}>Menonton</button>

                </div>

                

                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/600/400" alt="" />
                    
                </div>
            </section>
        </div>
    )
}


export default Hero;