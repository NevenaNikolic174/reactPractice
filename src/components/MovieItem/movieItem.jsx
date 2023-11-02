import styles from './movieItem.module.css';

function MovieItem({poster, title, imdbID}){

    return (
        <div className={styles.wrapper}>
            <img src={poster} alt=""/>
            <div className={styles.footer}>
                {title}
                <a
                href={"https://imdb.com/title/"+imdbID} 
                className={styles.imdb}>IMDB</a>
            </div>
        </div>
    )
}

export default MovieItem;