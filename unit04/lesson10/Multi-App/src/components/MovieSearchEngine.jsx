import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`
const Button = styled.button`
    color:#ffff
    background-color:#000
`
const MoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const MovieCard = styled.div`
    display: flex;
`


const MovieSearchEngine = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=294c288b`)
            setMovies(response.data.Search)
        } catch (error) {
            console.error('Erro:', error)
        }
    }
    return (
        <Container>
            <Title>Movie Search Engine</Title>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button onClick={searchMovies}>Search</Button>
            <div>
                {movies && movies.map((movie) => {
                    <div key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                })}
            </div>
        </Container>
    )
}

export default MovieSearchEngine