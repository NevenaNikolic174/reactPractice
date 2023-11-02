import styles from './header.module.css';

function Header({search, setSearch}){


    // function handleChange(e){

    //     setSearch(e.target.value);
    // }


    return (
        <header className={styles.header}> 
            <div className={styles.logo}>
                FILMOVI
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </header>
    )
}

export default Header;