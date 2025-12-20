import { useState } from 'react'
import './styles/main.css'
import RatingsChip from './components/ratingsChip'
import FavoriteButton from './components/favoriteButton'

function App() {

  return (
    <>
      <FavoriteButton />
      <RatingsChip> 77% </RatingsChip>
    </>
  )
}

export default App
