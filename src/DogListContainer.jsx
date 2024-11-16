// @ts-check
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
  const [displayBreed, setDisplayBreed] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(Response => Response.json())
      .then(myJson => {
        setBreeds(myJson['message'])
      })
  }, [])

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        displayBreed={displayBreed}
        setDisplayBreed={setDisplayBreed}
      />
    </>
  )
}

export default DogListContainer
