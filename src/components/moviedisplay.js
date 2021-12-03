

function MovieDisplay(moviedata)
{
    const movie=moviedata.moviedata
    console.log(moviedata)
    return(
    <div className="moviecard">
        <div className="moviepos">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        </div>
       
        <div className="moviedes">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
        
    </div>
    )
}
export default MovieDisplay;