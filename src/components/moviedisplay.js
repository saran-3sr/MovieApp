

function MovieDisplay(moviedata)
{
    const movie=moviedata.moviedata
    console.log(moviedata)
    return(
    <div className="moviecard">
        <div className="moviepos">
        <img className="pos" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <div className="titlediv">
        <h1 className="title">{movie.title}</h1>
        <hr />

        </div>
        
        </div>
       
        <div className="moviedescard">
            
            <p className="moviedes"><strong>Release Date - </strong>{movie.release_date}</p>
            <hr />
            <p className="moviedes"><strong>Description</strong> <br />{movie.overview}</p>
            <hr />
        </div>
         
    </div>
    )
}
export default MovieDisplay;