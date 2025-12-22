import { useState } from 'react'
import './styles/main.css'
import MovieCard from './components/movieCard'

function App() {

  return (
    <>
    <div className="max-w-sm mx-auto p-4">
      <MovieCard 
        id={1}
        title="Inception"
        overview="A mind-bending thriller"
        poster_path="/test.jpg"
        genre_ids={[28, 878]}
        release_date="2010-07-16"
        />

    </div>
    </>
  )
}

export default App
