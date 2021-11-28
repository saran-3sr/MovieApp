
import { useState } from 'react';
import MovieDisplay from './moviedisplay';

function SearchBar()
{
    var searchvalue;
    const searchChange=(e)=>{
        searchvalue=e.target.value;
        movie();
    }
    const[datas,setvalue]=useState(' ');
    const movie= async()=>{
        const movieFetch=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&language=en-US&query=${searchvalue}&page=1&include_adult=false`)
        const data=await movieFetch.json();
        //console.log(data);
        
        setvalue(data.results);
        console.log(datas);
    }; 
    return(
        <div className="searchbar">
            <input type="text" onChange={searchChange} />
        
            <MovieDisplay moviename={datas.title} />
        </div>
    )
}

export default SearchBar;