
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState

  useEffect(() => {
    const url = 'https://rickandomortyapi.com/api/location/${getRandomNumber(126)}'
    axios.get(url)
    .then(res => setLocation(res.data))
    .carch(err => console.error(err))
  }, [])
  console.log(location)

  return (
    <div> 
      <h1>Rick And Morty</h1>
      <LocationInfo />
  
    </div>
  )
}

export default App
