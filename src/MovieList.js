import MovieCard from './MovieCard'

function MovieList(props) {
    const{movies}=props;
  return (
    <div className='movie-list'>
        {
            movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))
        }

    </div>
  )
}

export default MovieList