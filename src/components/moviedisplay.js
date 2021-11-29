

function MovieDisplay(moviedata)
{
    const movie=moviedata.moviedata
    console.log(moviedata)
    return(
    <div className="moviecard">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <div className="moviedes">
        <h1>{movie.title}</h1>
        </div>
        
    </div>
    )
}
export default MovieDisplay;