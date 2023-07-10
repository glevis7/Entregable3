
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {

  const [location, setLocation] = useState()
  const [idlocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState (false)
  const [isLoading, setIsLoading] = useState (true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idlocation}`
    setIsLoading(true)
    axios.get(url)
    .then(res => {
      setLocation(res.data) 
      setHasError(false)
    })
    .catch(err => {
      console.error(err)
      setHasError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
    
  }, [idlocation])


  return (
    <div > 
      <div className="banner-container">
        <img src='/Imgs/image 2.png' alt='' className='banner-text' />
        <img src='/Imgs/image 3.png' alt='' className="banner-image" />
      </div>
      
      <FormLocation
        setIdLocation={setIdLocation}
      /> 
      {
        isLoading
          ?(<h2>Loading...</h2>)
          : (
             hasError
               ? (<h1>❌ Hey! you must provide an id from 1 to 126 🥴</h1>)
               : (
                 <>
                  <LocationInfo
                    location={location}
                  />
                  <div className='resident-container'>
                    {
                      location?.residents.map(url => (
                       <ResidentCard
                         key={url}
                         url={url} 
                       />
                      ))
                    }
                  </div>
               </>
              )
          )    
      }
    </div>
  )
}

export default App
