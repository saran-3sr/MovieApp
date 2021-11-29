
import { useState } from 'react';
import MovieDisplay from './moviedisplay';

function SearchBar()
{
    var [searchvalue,setsearchvalue]=useState(' ');
    const searchChange=(e)=>{
        setsearchvalue(e.target.value);
        movie();
    }
    const[movieresults,setmovieresults]=useState([]);
    const movie= async()=>{
        const movieFetch=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&query=${searchvalue}&page=1&include_adult=false`)
        const data=await movieFetch.json();
        //console.log(data);
        setmovieresults(data.results);
        console.log(movieresults)
    }; 
    return(
        <div className="searchbar">
            <input type="text" onChange={searchChange} />
                {
                movieresults.map((movie)=>(
                    <MovieDisplay moviedata={movie} />
                ))
                }
            
            
        </div>
    )
}

export default SearchBar;