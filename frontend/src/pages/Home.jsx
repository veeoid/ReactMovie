import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
  {
    "id": 1024,
    "title": "The Silent Horizon",
    "release_date": "2023-11-15",
    "url": "https://www.example.com/movies/the-silent-horizon"
  },
  {
    "id": 1025,
    "title": "Neon Dreams: Cyberpunk Chronicles",
    "release_date": "2024-05-22",
    "url": "https://www.example.com/movies/neon-dreams"
  },
  {
    "id": 1026,
    "title": "Whispers of the Old World",
    "release_date": "2022-08-30",
    "url": "https://www.example.com/movies/whispers-old-world"
  },
  {
    "id": 1027,
    "title": "Velocity Shift",
    "release_date": "2025-01-10",
    "url": "https://www.example.com/movies/velocity-shift"
  },
  {
    "id": 1028,
    "title": "Cooking with Chaos",
    "release_date": "2021-03-14",
    "url": "https://www.example.com/movies/cooking-with-chaos"
  }
]

const handleSeach = () => {

}

return (<div className="home">
        <form onSubmit={handleSeach} className="search-form">
            <input type="text" placeholder="Search for movies.." className="search-input" />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>)
}


export default Home;