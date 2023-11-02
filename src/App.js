
import './App.css';

import {useEffect, useState} from 'react';
import Header from './components/Header/header';
import MovieItem from './components/MovieItem/movieItem';
import axios from 'axios';
import { SpinnerDotted } from 'spinners-react';


function App() {

  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    if(search === '') {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(async () => {
      try{

        const {data} = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=6c5c0f9`); //await znaci: sacekaj, dobices podatak kada se funkcija izvrsi. //svaka f-ja koja poziva await mora da ima async da se poveze
        setMovieList(data.Search);
      

      }catch{
        setIsError(true);
      } finally {
        //finally code se izvrsava uvek
        setIsLoading(false);
      }
     
    }, 2000);

    return () => clearTimeout(timeout);

    }, [search]
  );


  useEffect(() => {
    
    if (search === '') { 
      setMovieList([]);
    }
  }, [search]);



  return (
    <>
      <Header search={search} setSearch={setSearch} />
      
      
      {search === '' && <h2 className='home'>Please SEARCH the movie!</h2>}    
      {/*search === '' je uslov. Ako je search prazan string, onda će se renderovati h2 element sa tekstom "Please SEARCH the movie!". 
      Ako nije prazan, onda se neće renderovati ništa jer nema šta da se renderuje na mestu {search === '' && ...}.*/ }
     
      {isLoading 
      ? <div className='loaderWrapper' ><SpinnerDotted size="75" color="#2ab6c6" thickness={150} /></div> :  isError ? "No data" : (movieList && Array.isArray(movieList) && <div className='moviesWrapper'> 
        { movieList.map( x=> (
          <MovieItem title={x.Title} poster={x.Poster} imdbID={x.imdbID}/>
          )
        )}
      </div>)}
   </>
  );
}

export default App;
