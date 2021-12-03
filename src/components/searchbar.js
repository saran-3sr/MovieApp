
import { useState } from 'react';
import MovieDisplay from './moviedisplay';

function SearchBar()
{
    const [searchvalue,setsearchvalue]=useState(" ");
    const[movieresults,setmovieresults]=useState([]);
    const searchChange=(e)=>{
        e.preventDefault();
        setsearchvalue(e.target.value);
        console.log(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&query=${e.target.value}&page=1&include_adult=false`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{

            if(!data.errors)
        {
            setmovieresults(data.results);
        }
        else
        {
            setmovieresults([])
        }
        
        })
        
        
    } 
    return(
        <div className="searchbar">
            <div className="searchdiv">
            <input type="text" class="search" onChange={searchChange} />
            </div>
                {movieresults.length>0 &&(
                movieresults.map((movie)=>(
                    <MovieDisplay moviedata={movie} />
                ))

                )}
            
            
        </div>
    )
}

export default SearchBar;