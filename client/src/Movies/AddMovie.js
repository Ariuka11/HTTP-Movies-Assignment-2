import React, { useState, useEffect } from "react"
import axios from 'axios'

const AddMovie = (props) => {

    const [movie, setMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        actor : '',
        stars : []
    })


    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name] : e.target.value,
        })
    }

    const handleStars = e => {
      const actors = movie.stars
        actors.push(movie.actor)
        
        setMovie({...movie, 
            actor: '', stars: actors})

        console.log(movie.stars)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(movie)
        axios.post(`http://localhost:5000/api/movies`, movie)
            
            .then(res => {
                props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <h1>Add movie</h1>
                <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={movie.title}
                        onChange={handleChange}
                />
                <input
                        type="text"
                        name="director"
                        placeholder="Director"
                        value={movie.director}
                        onChange={handleChange}
                />
                <input
                        type="text"
                        name="metascore"
                        placeholder="Metascore"
                        value={movie.metascore}
                        onChange={handleChange}
                />
                 <input
                        type="text"
                        name="actor"
                        placeholder="Actor"
                        value={movie.actor}
                        onChange={handleChange}
                />
                {/* {movie.stars.map(star => {
                    return <input
                    type = 'text'
                    name = 'stars'
                    placeholder = 'Stars'
                    value = {star}
                    onChange = {handleStars} />
                })} */}
                <button onClick = {handleStars}>Add Actor</button>
                <button onClick = {handleSubmit}>Save</button>
            
                {movie.stars.map(actor => {
                        return <div>{actor}</div>
                    })}
        </div>
    )
}

export default AddMovie